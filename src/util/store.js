import { writable } from 'svelte/store'

export const time = writable(new Date());

export const status = writable('prevote');

export const title = writable('Democracias cotidianas');
