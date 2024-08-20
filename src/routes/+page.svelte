<script lang="ts">
    import {onMount} from "svelte";
    import {leaderboardData, songs} from "$lib/store.ts";

    const getSong = (hash: String) => {
        if ($songs === null) {
            return null
        }

        const song = $songs.songs.find(it => it.hash === hash)

        if (song === undefined)
            return null

        return song
    }

    onMount(async () => {
        fetch("/api/songs")
            .then(response => response.json())
            .then(data => {
                songs.set(data)
            }).catch(error => {
            console.log(error);
            return [];
        });
        fetch("/api/leaderboard")
            .then(response => response.json())
            .then(data => {
                leaderboardData.set(data)
            }).catch(error => {
            console.log(error);
            return [];
        });
    });

</script>
<div style="display:flex; gap: 5rem; margin-inline: auto; justify-content: center; padding: 3rem">
    {#if $leaderboardData != null}
            {#each Object.entries($leaderboardData) as [name, leaderboard]}
                <div style="display: inline-block; max-width: 30rem">

                <h2>{name}</h2>

                {#each leaderboard as scoredata}
                    <div style="display: flex; flex-direction: column">
                        {#if $songs != null}
                            <p style="display: inline-block" class="song-name">{getSong(scoredata.hash)?.songName} [{getSong(scoredata.hash)?.diff}] {scoredata.type}</p>
                        {:else}
                            <p style="display: inline-block" class="song-name">{scoredata.hash} - {scoredata.type}</p>
                        {/if}
                        <ul>
                            {#each scoredata.scores as score}
                                <li class="score-item">{score.username} - {score.score} [{score.scorePr}] - {score.WP} WP</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
                </div>
            {/each}
    {/if}
</div>

<style>

    .song-name {
        font-weight: 600;
    }



    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
    }

    .score-item {
        padding: 1.5rem 1rem;
        border-radius: 0.25rem;
        background-color: #812350;
        color: #f1eaff;
    }



</style>