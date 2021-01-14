import { writable } from 'svelte/store';

export const filters = writable({
  type:"apartment",
  beds:2,
  baths:2
});