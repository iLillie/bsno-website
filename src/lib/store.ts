import { writable, derived } from 'svelte/store';


export const leaderboardData = writable<Leaderboards | null>(null)

export const songs = writable<{"songs": Song[]} | null>(null)