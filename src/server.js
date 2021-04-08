require('dotenv').config();

import sirv from 'sirv';
import polka from 'polka';
import { json } from 'body-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { v4 as uuidv4 } from "uuid";
import helmet from 'helmet';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const { API_BASE_URL, SESSION_ID } = process.env;

const FileStore = new sessionFileStore(session);

// Setup express-session
var setup = {
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  },
	resave: false,
  rolling: true,
  saveUninitialized: false,
  // Setup Rollup:
  secret: SESSION_ID,
  store: new FileStore({
    path: `.sessions`
  })
}

if (!dev) {
  // Use secure cookies in production (requires SSL/TLS)
  setup.cookie.secure = true;
}

polka() // You can also use Express
	.use(
		json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
    session(setup),
    (req, res, next) => {
      res.locals = {};
      res.locals.nonce = uuidv4();
      next();
    },
    helmet({
      contentSecurityPolicy: {
        directives: {
          scriptSrc: [
            "'self' 'unsafe-eval' blob:",
            (req, res) => `'nonce-${res.locals.nonce}'`
          ],
          //styleSrc: "'unsafe-inline'",
          defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        }
      }
    }),
		sapper.middleware({
			session: (req, res) => ({
				API_BASE_URL,
				user: req.session & req.session.user,
				access_token: req.session & req.session.access_token,
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
