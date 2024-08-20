<script lang="ts">

    import ScoreItem from "$lib/components/ScoreItem.svelte";
    import {songs} from "$lib/store.ts";

    export let scores: SongScore[]

    const getSong = (hash: String) => {
        if ($songs === null) {
            return null
        }

        const song = $songs.songs.find(it => it.hash === hash)

        if (song === undefined)
            return null

        return song
    }

</script>

{#each scores as score}
    <div style="display: flex; flex-direction: column; margin-bottom: 1.5rem">
        <p style="display: inline-block" class="song-name">
            {getSong(score.hash)?.songName}
             <span class="type">[{score.type}]</span>
        </p>
        <ul>
            {#each score.scores as scoreItem}
                <ScoreItem score={scoreItem}/>
            {/each}
        </ul>
    </div>
{/each}


<style>



    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        padding: 0;
    }


    .song-name {
        font-weight: 600;
        margin-block: 0.2rem;
    }



    .type {
        font-weight: 400;
        color: #ff4fa0;
    }

</style>