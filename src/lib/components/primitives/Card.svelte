<script lang="ts">
	import clsx from 'clsx';
	import ParallelLines from '$icons/ParallelLines.svelte';
	import Rect1 from '$icons/Rect1.svelte';
	import Circle1 from '$icons/Circle1.svelte';

	export let large: boolean = false;
	export let className: string = '';
	export let noBgImages: boolean = false;
</script>

<div
	class={clsx(
		'relative overflow-hidden rounded-[12px] border border-white/10 bg-white bg-opacity-[1.5%] py-4 px-6',
		className
	)}
>
	{#if !noBgImages}
		<ParallelLines
			className={clsx(
				' absolute z-[-1]',
				large ? 'top-[-6px] left-[10%] w-[130px] md:w-[160px]' : 'top-[-6px] left-[-6px] w-[100px]'
			)}
		/>
		<Rect1
			className={clsx(
				'absolute z-[-1]',
				large ? 'top-[50%] right-0 w-[100px] md:w-[160px]' : 'top-[45%] right-0 w-[90px]'
			)}
		/>
		<Circle1
			className={clsx(
				'absolute z-[-1]',
				large
					? 'bottom-[-60px] left-[20%] w-[130px] md:w-[150px]'
					: 'bottom-[-50px] left-[-10px] w-[130px]'
			)}
		/>
	{/if}

	<slot />
</div>
