<script lang="ts">
	// IMPORTED TYPES
	import type { Entity as EntityType } from '$lib/stores/entities';
	// IMPORTED COMPONENTS
	import AddEntityButton from './AddEntityButton.svelte';
	import Entity from './Entity.svelte';

	// -- REQUIRED PROPS -- //

	export let entity: EntityType;

	// -- OPTIONAL PROPS -- //

	export let parent: EntityType | null = null;
</script>

<div class="flex flex-col justify-center">
	<div class="flex justify-center">
		<Entity bind:entity bind:parent />
	</div>

	<div class="max-auto mx-auto my-[20px] h-[2px] w-full bg-zinc-300" />

	<div class="flex items-start gap-10">
		{#if entity.children.length === 2}
			{#each entity.children as child (child.id)}
				<svelte:self bind:entity={child} bind:parent={entity} />
			{/each}
		{:else if entity.children.length === 1}     
			<svelte:self bind:entity={entity.children[0]} bind:parent={entity} />
			<AddEntityButton bind:parent={entity} />
		{:else}
			<AddEntityButton bind:parent={entity} />
		{/if}
	</div>
</div>
