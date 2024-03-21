<script lang="ts">
	import type { IndexMonster } from './+page';

    import { caughtMonsters } from '$lib/stores'

	export let monster: IndexMonster;
	const catchMonster = () => {
		caughtMonsters.update((monsters) => {
            return [...monsters, monster];
        });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-[100px] m-[10px] p-[10px] flex flex-col items-center justify-center relative bg-[#eee] hover:bg-[#ddd]"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={catchMonster}>
		<div>
			<img src={monster.image} alt={monster.name} />
			{monster.name}
		</div>
		<div class="absolute top-2 left-2 text-[#aaa]">
			{monster.id}
		</div>
	</div>
</div>
