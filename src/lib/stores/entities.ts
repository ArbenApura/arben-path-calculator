// IMPORTED DEP-UTILS
import { writable } from 'svelte/store';

// -- TYPES -- //

export type Entity = {
	id: string;
	label: string;
	children: Entity[];
};

// -- STORES -- //

export const entities = writable<Entity[]>([
	{
		id: '1',
		label: '1',
		children: [],
	},
]);
