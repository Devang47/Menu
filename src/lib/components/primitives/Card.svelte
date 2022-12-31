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
		'bg-white bg-opacity-[1.5%] border border-white/10 rounded-[12px] py-4 px-6 relative overflow-hidden',
		className
	)}
>
	{#if !noBgImages}
		<ParallelLines className="w-[100px] absolute top-[-6px] left-[-6px] z-[-1]" />
		<Rect1 className="w-[90px] absolute top-[45%] right-0 z-[-1]" />
		<Circle1 className="w-[130px] absolute bottom-[-5px] left-[-10px] z-[-1]" />
	{/if}

	<slot />
</div>
