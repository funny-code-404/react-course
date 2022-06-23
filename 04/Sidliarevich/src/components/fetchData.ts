import {Data} from "../data";

export const fetchData = async (url: string,
                                onSuccess: (data: any) => void,
                                onError: (message: string) => void
) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        onSuccess(response)
    } catch (error) {
        if (error instanceof Error) {
            onError(error.message)
        }
    }
}