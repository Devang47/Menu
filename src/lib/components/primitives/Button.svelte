<script lang="ts">
	import clsx from 'clsx';

	export let label: string = '';
	export let className: string = '';
	export let primary: boolean = false;
	export let disabled: boolean = false;
</script>

<button
	aria-label={label}
	title={label}
	on:click
	class={clsx(
		'font-medium py-2 px-4 text-center text-sm bg-dark-1 hover:bg-dark-focus border rounded border-light-4/40 duration-75 flex items-center gap-1.5 justify-center custom-border text-light-2 hover:text-light-1',
		primary && 'primary bg-highlight hover:bg-highlight border-highlight text-white',
		disabled && 'opacity-50 cursor-not-allowed',
		className
	)}
	{disabled}
>
	<slot />
</button>
