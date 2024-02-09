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
		children: [
			{
				id: '2',
				label: '2',
				children: [
					{
						id: '3',
						label: '3',
						children: []
					}
				]
			},
			{
				id: '4',
				label: '4',
				children: [
					{
						id: '5',
						label: '5',
						children: []
					}
				]
			}
		]
	}
]);
