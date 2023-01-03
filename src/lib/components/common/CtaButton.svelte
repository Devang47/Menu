<script lang="ts">
	import clsx from 'clsx';

	export let className = '';
	export let whiteBg = false;
	export let uppercase = false;
</script>

<button
	class={clsx(
		`font-bold py-2 px-3 w-full sm:w-32 text-sm text-center rounded outline outline-[1px] outline-offset-4 outline-light-4 mix-blend-color-dodge font-sans`,
		className,
		uppercase && 'uppercase',
		whiteBg ? 'bg-white text-dark-1' : 'bg-light-4 text-light-1 hover:bg-light-3 duration-100'
	)}
>
	<slot />
</button>
