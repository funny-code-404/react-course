import { parsingData } from '../ParsingData'
export async function helper(url) {
    const fetched = await fetch(url);
    const json = await fetched.json()
    return parsingData(json)
}

