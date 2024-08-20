<script lang="ts">
    export let score: Score
</script>

<li class="score-item">
    <span class="username">{score.username}</span>
    <p> {new Intl.NumberFormat("de-DE").format(score.score)} [{score.scorePr}] {score.WP} WP</p>
</li>

<style>


    .username {
        font-weight: 400;
    }

    p {
        margin-top: 0.4rem;
        margin-bottom: 0;
        color: #e6e1f1;
        font-weight: 600;
    }

    .score-item {
        padding: 1rem 1rem;
        border-radius: 0.25rem;
        background-color: #942c5c;
        color: #f1eaff;
    }
</style>