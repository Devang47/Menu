<script lang="ts">
	import clsx from 'clsx';
	import BackArrow from '$icons/BackArrow.svelte';

	export let className: string = '';
	export let label: string = 'back';
</script>

<button
	on:click
	title="goto previous step"
	class={clsx(
		'flex items-center gap-2 rounded border border-light-4 bg-dark-1 py-1.5 px-6 pl-4 text-center text-sm font-semibold text-light-3 duration-75',
		className
	)}
>
	<BackArrow />
	{label}
</button>
