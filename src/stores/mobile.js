import { writable } from 'svelte/store';

export const isMobile = writable(window.innerWidth < 599); // 599px matches the "medium" breakpoint

window.addEventListener('resize', () => {
  isMobile.set(window.innerWidth < 599);
}); 