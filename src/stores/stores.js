import { writable } from 'svelte/store';

export const filters = writable({
  type:"apartment",
  beds:1,
  baths:1
});