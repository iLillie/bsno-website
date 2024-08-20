import {json, type RequestEvent} from "@sveltejs/kit";


export async function GET({url}: RequestEvent) {
    const jsonResponse = await fetch("https://bsno-wc.herokuapp.com/api/v2/getWeeklyMaps")
    return json(await jsonResponse.json() as Song[])
}


