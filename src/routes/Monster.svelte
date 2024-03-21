<script lang="ts">
	import type { IndexMonster } from './+page';

	import { caughtMonsters } from '$lib/stores';

	export let monster: IndexMonster;
    export let index: number;
	const catchMonster = () => {
        

		caughtMonsters.update((monsters) => {
			return [...monsters, monster];
		});
	};

	export let isCaught: boolean = false;

    $: amountCaught = $caughtMonsters.filter((caughtMonster) => caughtMonster.id === monster.id).length;


	function releaseMonster() {
		caughtMonsters.update((monsters) => {
            return monsters.filter((_, i) => i !== index);
        });
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="space-y-1 w-[120px] m-[10px] p-[10px] flex flex-col items-center justify-center relative bg-[#eee] hover:bg-[#ddd]"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div>
		<div>
			<img src={monster.image} alt={monster.name} />
			<p class="text-center">{monster.name}</p>
		</div>
		<span class="absolute top-2 left-2 text-[#aaa]">
			{monster.id}
		</span>
        {#if !isCaught}
        <span class="absolute top-2 right-2 text-[#333]">
			{amountCaught}
		</span>
        {/if}
	</div>
    {#if !isCaught}
	<button on:click={catchMonster} class="bg-white shadow-sm rounded-md px-2 py-1">Catch</button>
    {:else}
    <button on:click={releaseMonster} class="bg-white shadow-sm rounded-md px-2 py-1">Release</button>
    {/if}

</div>
