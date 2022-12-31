<script lang="ts">
	type Option = {
		id: number;
		value: string;
	};
	export let options: Option[] = [];
	export let value: string = options[0].value;
	export let id: string = 'select';
	export let label: string = 'label here:';
</script>

<div class="dropdown-menu">
	<div class="text-[12px] font-semibold text-light-2 mb-1.5">{label}</div>

	<select
		name="select-menu"
		class="py-2.5 px-5 border border-light-3 outline-none bg-dark-1 rounded appearance-none relative focus:border-highlight !pr-14"
		{id}
		title={id}
		required
		on:change
		{value}
	>
		{#each options as option, i}
			<option value={option.value} selected={i === 0}>
				{option.value}
			</option>
		{/each}
	</select>
</div>
