export async function helper(url) {
    const baseURL = 'https://cors-anywhere.herokuapp.com/'
    const fetched = await fetch(`${baseURL}${url}`);
    const json = await fetched.json()
    return json[url.split('/')[url.split('/').length - 1]]
}

