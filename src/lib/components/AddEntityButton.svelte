<script lang="ts">
	// IMPORTED TYPES
	import type { Entity } from '$lib/stores/entities';
	// IMPORTED UTILS
	import { generateId } from '$lib/utils';
	// IMPORTED DEP-COMPONENTS
	import { Button, Dialog, Input, Label } from '$lib/shadcn';

	// -- REQUIRED PROPS -- //

	export let parent: Entity;

	// -- STATES -- //

	let isOpen = false;
	let label = '';

	// -- REACTIVE STATES -- //

	$: isCompleted = label !== '';

	// -- UTILS -- //

	function handleAdd() {
		if (!isCompleted) return;

		const entity: Entity = {
			id: generateId(),
			label,
			children: []
		};
		parent.children = [...parent.children, entity];

		isOpen = false;
	}
</script>

<div class="flex justify-center">
	<div class="absolute h-5 w-[2px] -translate-y-[20px] bg-zinc-300" />

	<Dialog.Root bind:open={isOpen}>
		<Dialog.Trigger asChild let:builder>
			<Button variant="outline" size="icon" builders={[builder]}>
				<i class="ph-bold ph-plus"></i>
			</Button>
		</Dialog.Trigger>

		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add Path</Dialog.Title>
			</Dialog.Header>

			<form on:submit={handleAdd}>
				<Input id="label" placeholder="Enter label..." bind:value={label} />
			</form>

			<Dialog.Footer>
				<Button disabled={!isCompleted} on:click={handleAdd}>Add</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
