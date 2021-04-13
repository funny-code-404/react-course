
    export const dogsFromServer = (response) => {
    const data = Object.entries(response);
    console.log(data)
    return data;
}



/* export const dogsFromServer = (response) => {
    console.log('response', response)
    const { message } = response.data;
    const data = Object.entries(message);
    console.log('data', data)
    return data;
}
 */