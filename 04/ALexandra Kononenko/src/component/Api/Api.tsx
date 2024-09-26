import data from "../../data/data";

export default class Api {


    static async fetchData(url: string, onSeccess: (data :any) => void, onError: (message: string) => void ) {
        try {
            let response = await fetch(url);
            response = await response.json();
            onSeccess(response)
        } catch (error) {
            if (error instanceof Error) {
                onError(error.message)
            }
        }
    }
}