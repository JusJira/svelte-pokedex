<script lang="ts">
    import {caughtMonsters} from '$lib/stores';
    import Monster from '../Monster.svelte';
</script>

<h2>My Monsters</h2>

<div>
    {#each $caughtMonsters as monster}
        <Monster {monster} />
    {/each}
</div>