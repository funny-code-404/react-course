import axios from "axios";

export default class ApiService {
    static urlPopularHotels = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
    static urlHotels = 'https://fe-student-api.herokuapp.com/api/hotels';

    static async getPopularHotels() {
        try {
            const response = await axios.get(this.urlPopularHotels);

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };

    static async getHotels(searchValue: string) {
        try {
            const response = await axios.get(this.urlHotels, {
                params: {search: searchValue}
            });

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };
}