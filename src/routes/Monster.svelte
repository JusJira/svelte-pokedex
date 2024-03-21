<script lang="ts">
	import type { IndexMonster } from './+page';

	export let monster: IndexMonster;
	export let updateSearchParams: (key: string, value: string) => void;
	export let isInteractive: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-[100px] m-[10px] p-[10px] flex flex-col items-center justify-center relative bg-[#eee] hover:bg-[#ddd]"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={() => (isInteractive ? updateSearchParams('monsterId', monster.id) : () => {})}>
		<div>
			<img src={monster.image} alt={monster.name} />
			{monster.name}
		</div>
		<div class="absolute top-2 left-2 text-[#aaa]">
			{monster.id}
		</div>
	</div>
    {#if isInteractive}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={() => updateSearchParams('monsterId2', monster.id)}>Add Monster 2</div>
	{/if}
</div>