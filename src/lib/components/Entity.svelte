<script lang="ts">
	// IMPORTED TYPES
	import { entities, type Entity } from '$lib/stores/entities';
	// IMPORTED DEP-COMPONENTS
	import { Button, Dialog, Input } from '$lib/shadcn';
	import { Parentheses } from 'lucide-svelte';

	// -- REQUIRED PROPS -- //

	export let entity: Entity;

	// -- OPTIONAL PROPS -- //

	export let parent: Entity | null = null;

	// -- STATES -- //

	let label = entity.label;
	let isOpen = false;

	// -- REACTIVE STATE -- //

	$: isCompleted = label !== '';

	$: isChanged = isCompleted && label !== entity.label;

	// -- UTILS -- //

	function handleSave() {
		entity.label = label;
		isOpen = false;
	}

	function handleDelete() {
		if (parent) parent.children = parent.children.filter((child) => child.id !== entity.id);
		isOpen = false;
	}
</script>

<div class="absolute h-5 w-[2px] -translate-y-[20px] bg-zinc-300" />

<Dialog.Root bind:open={isOpen}>
	<Dialog.Trigger asChild let:builder>
		<Button
			id="entity-{entity.id}"
			class="flex items-center justify-center rounded-full border border-blue-800 font-semibold"
			size="icon"
			builders={[builder]}
		>
			{entity.label}
		</Button>
	</Dialog.Trigger>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Edit Path</Dialog.Title>
		</Dialog.Header>

		<form on:submit={handleSave}>
			<Input id="label" placeholder="Enter label..." bind:value={label} />
		</form>

		<Dialog.Footer class="gap-2">
			{#if parent}
				<Button variant="destructive" on:click={handleDelete}>Delete</Button>
			{/if}

			<Button disabled={!isChanged} on:click={handleSave}>Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<div class="absolute h-5 w-[2px] translate-y-10 bg-zinc-300" />
