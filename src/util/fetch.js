import { writable } from 'svelte/store';
import { status, time } from './store';
import fetch from 'cross-fetch';

const cache = new Map();

export function getData(url, cached) {

  const store = writable(new Promise(() => {}));

  if (cached) {
    if (cache.has(url)) {
      store.set(Promise.resolve(cache.get(url)));
    } else store.set(null);
  }

  const load = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      time.set(data.time);
      status.set(data.status);
      store.set(Promise.resolve(data));

      cached ? cache.set(url, data) : null;
    } catch (error) {
      console.log(error);
    }
  }

  load();

  return store;
}