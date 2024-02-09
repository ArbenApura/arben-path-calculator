<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/shadcn/utils';

	type $$Props = DialogPrimitive.TitleProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Title
	class={cn('text-xl font-semibold leading-none tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</DialogPrimitive.Title>
