<script lang="ts">
	// IMPORTED STORES
	import { entities, type Entity } from '$lib/stores/entities';
	// IMPORTED DEP-COMPONENTS
	import { Button, Dialog } from '$lib/shadcn';

	// -- STATES -- //

	let isOpen = false;

	// -- REACTIVE STATES -- //

	$: paths = getAllPaths($entities[0]);

	// -- UTILS -- //

	function getAllPaths(entity: Entity, currentPath: string = ''): string[] {
		const newPath = currentPath === '' ? entity.label : `${currentPath}-${entity.label}`;

		if (entity.children.length === 0) return [newPath];

		const paths: string[] = [];
		for (const child of entity.children) {
			paths.push(...getAllPaths(child, newPath));
		}

		return paths;
	}

	const handleClose = () => (isOpen = false);
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Trigger asChild let:builder>
		<Button class="fixed bottom-4 right-4 z-20 flex items-center gap-2 shadow-sm" builders={[builder]}>
			<i class="ph-bold ph-play"></i>
			Calculate
		</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Path Calculation Result</Dialog.Title>
			<Dialog.Description>Here are all the pathways discernible from the diagram.</Dialog.Description>
		</Dialog.Header>
		<div class="max-h-[50vh] overflow-auto">
			<div class="rounded-md border border-dashed">
				{#each paths as path, i}
					<div class="flex gap-2 border-b border-dashed p-2 last:border-none">
						<small>{i + 1}.)</small>
						<small>{path}</small>
					</div>
				{/each}
			</div>
		</div>
		<Dialog.Footer>
			<Button on:click={handleClose}>Okay</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
