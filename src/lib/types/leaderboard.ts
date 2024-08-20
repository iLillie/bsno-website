type Leaderboards = {
    top10: SongScore[]
    top25: SongScore[]
    top50: SongScore[]
    top100: SongScore[]
}

type SongScore = {
    hash: string;
    type: string;
    scores: Score[]
}

type Score = {
    username: string;
    userId: string;
    score: number;
    scorePr: string;
    WP: string
}
