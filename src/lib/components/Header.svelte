<script lang="ts">
	// IMPORTED ASSETS
	import LogoPNG from '$lib/assets/logo.png';
	// IMPORTED DEP-UTILS
	import mobile from 'is-mobile';

	// -- STATES -- //

	let isMobile = mobile();

	// -- UTILS -- //

	const handleResize = () => isMobile = mobile();
</script>

<window on:resize={handleResize} />

<div class="fixed left-0 top-0 z-10 w-full">
	{#if isMobile}
		<div class="bg-blue-600 text-white text-center p-2">
			<small class="text-xs">Avoid "Navigating" on mobile devices to enable clickable buttons.</small>
		</div>
	{/if}
	<div class="flex items-center gap-2 border-b bg-white p-4 shadow-sm">
		<img class="w-8" src={LogoPNG} alt="Logo" />
		<h1 class="text-lg text-blue-600">Arben Path Calculator</h1>
	</div>
</div>