import { writable, type Writable } from 'svelte/store';
import type { IndexMonster } from '../routes/+page';
import { browser } from '$app/environment';

let stored = browser ? JSON.parse(localStorage.caughtPokemon || '[]') : [];
export const caughtMonsters: Writable<IndexMonster[]> = writable(stored || []);

if (browser) {
	caughtMonsters.subscribe(($value) => (localStorage.caughtPokemon = JSON.stringify($value)));
}
