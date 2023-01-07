<script lang="ts">
	export let currency: 'INR' | 'USD' = 'INR';

	export let data: {
		name: string;
		description?: string;
		price: string;
	};
</script>

<div class="text-base py-4">
	<div class="text-gray-100 flex items-center justify-between">
		<h2 class="font-semibold">{data.name}</h2>

		<div class="italic text-sm font-medium whitespace-nowrap">
			{#if currency === 'INR'}
				₹
			{:else}
				$
			{/if}
			{data.price}
		</div>
	</div>

	{#if data.description}
		<p class="text-sm text-light-2 mt-2.5 leading-[170%]">
			{data.description}
		</p>
	{/if}
</div>
