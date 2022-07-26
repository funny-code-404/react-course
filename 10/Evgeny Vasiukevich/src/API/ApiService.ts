import axios from "axios";
import { TAvailableHotelsParams } from "../types/types";

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

    static async getAvailableHotels(params?: TAvailableHotelsParams) {
        try {
            const response = await axios.get(this.urlHotels, {
                params: {
                    search: params?.search,
                    dateFrom: params?.dateFrom,
                    dateTo: params?.dateTo,
                    adults: params?.adults,
                    children: params?.children,
                    rooms: params?.rooms,
                }
            });

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };

    static async getHotelById(id: string = '') {
        try {
            const response = await axios.get(`${this.urlHotels}/${id}`);

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };
}