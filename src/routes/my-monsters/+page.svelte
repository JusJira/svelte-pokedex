<script lang="ts">
    import {caughtMonsters} from '$lib/stores';
    import Monster from '../Monster.svelte';
</script>

<h2 class="text-center text-2xl m-10">My Monsters</h2>

<div class="flex flex-row flex-wrap justify-start">
    {#each $caughtMonsters as monster,index}
        <Monster {monster} {index} isCaught/>
    {/each}
</div>