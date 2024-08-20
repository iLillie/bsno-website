<script lang="ts">
    import {onMount} from "svelte";
    import {leaderboardData, songs} from "$lib/store.ts";
    import Scores from "$lib/components/Scores.svelte";

    const fetchSongs = () => {
        fetch("/api/songs")
            .then(response => response.json())
            .then(data => {
                songs.set(data)
            }).catch(error => {
            console.log(error);
            return [];
        });
    }

    const fetchLeaderboard = () => {
        fetch("/api/leaderboard")
            .then(response => response.json())
            .then(data => {
                leaderboardData.set(data)
            }).catch(error => {
            console.log(error);
            return [];
        });
    }


    onMount(async () => {
        fetchSongs()
        fetchLeaderboard()
    });

</script>


{#if $leaderboardData != null}
    <div class="container-lite">
        {#each Object.entries($leaderboardData) as [name]}
            <a style="margin: 0.25rem" href={"#" + name}>#{name}</a>
        {/each}
    </div>
{/if}

<div class="container">

    {#if $leaderboardData != null}
        {#each Object.entries($leaderboardData) as [name, leaderboard]}
            <div class="leaderboard">
                <h2 id={name} class="leaderboard-name">{name}</h2>
                <Scores scores={leaderboard}/>
            </div>
        {/each}
    {/if}
</div>

<style>


    .container-lite {
        display: none;
        flex-wrap: wrap;
        gap: 2rem;
        margin-inline: auto;
        justify-content: center;
        padding: 1rem
    }

    @media (max-width: 1080px) {
        .container-lite {
            display: flex;
        }
    }

    .leaderboard-name {
        padding: 0.5rem 1rem;
    }


    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        margin-inline: auto;
        justify-content: center;
        padding: 3rem
    }

    .leaderboard {
        display: inline-block;
        max-width: 20rem
    }
</style>