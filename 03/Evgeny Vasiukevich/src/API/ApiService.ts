import axios from "axios";

export default class ApiService {
    static async getPopularHotels() {
        try {
            const response = await axios.get('https://fe-student-api.herokuapp.com/api/hotels/popular');
            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
        
    };

    static async getHotels(searchValue: string) {
        try {
            const response = await axios.get('https://fe-student-api.herokuapp.com/api/hotels', {
                params: {search: searchValue}
            });
            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    }
}