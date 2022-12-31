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
		'font-medium py-2 px-4 text-center text-sm bg-dark-1 text-light-1 border rounded border-light-4 duration-75 flex items-center gap-1.5 justify-center custom-border ',
		primary && 'primary bg-highlight border-highlight',
		disabled && 'opacity-50 cursor-not-allowed',
		className
	)}
	{disabled}
>
	<slot />
</button>
