<script lang="ts">
	import clsx from 'clsx';

	export let className = '';
	export let whiteBg = false;
	export let uppercase = false;
</script>

<button
	on:click
	class={clsx(
		`w-full rounded py-2 px-3 text-center font-sans text-sm font-bold mix-blend-color-dodge outline outline-[1px] outline-offset-4 outline-light-4 sm:w-32`,
		className,
		uppercase && 'uppercase',
		whiteBg ? 'bg-white text-dark-1' : 'bg-light-4 text-light-1 duration-100 hover:bg-light-3'
	)}
>
	<slot />
</button>
