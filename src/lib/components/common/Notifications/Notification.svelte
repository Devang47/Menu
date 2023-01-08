<script lang="ts">
	import { scale } from 'svelte/transition';

	export let data: CustomNotification;

	const error = data.error;
</script>

<div
	class:bg-red-600={error}
	class:bg-green-700={!error}
	class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
	transition:scale={{ start: 0.9, opacity: 0 }}
>
	<div class="flex items-center p-4">
		<div class="flex w-0 flex-1 justify-between">
			<p class="w-0 flex-1 text-sm font-medium text-white">
				{data.message}
			</p>
		</div>
	</div>
</div>
