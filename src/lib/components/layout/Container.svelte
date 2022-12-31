<script lang="ts">
	import clsx from 'clsx';

	export let sectionClass: string = '';
	export let className: string = '';
	export let centered: boolean = false;
</script>

<section class={clsx(sectionClass, centered && 'h-screen w-full flex items-center justify-center')}>
	<div class={clsx(className, 'w-10/12 max-w-[1200px] py-4 mx-auto')}>
		<slot />
	</div>
</section>
