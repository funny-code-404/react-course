import axios from "axios";
import { AvailableHotelsParamsType } from "../redux/availableHotels/types"

export default class Services {
  static url = "https://fe-student-api.herokuapp.com/api/hotels";

  static async getHotelById(id: string = "") {
    try {
      const response = await axios.get(`${this.url}/${id}`);

      return response;
    } catch (error) {
      throw new Error("Unable to get a token.");
    }
  }

  static async getAvailableHotels(params: AvailableHotelsParamsType) {
     try {
       const response = await axios.get(this.url, {
         params: {
           search: params.search,
           adults: params.adults,
           children: params.children,
           rooms: params.rooms,
           dateFrom: params.dateFrom,
           dateTo: params.dateTo,
         },
       });

       return response;
     } catch (error) {
       throw new Error("Unable to get a token.");
     }
  }
}
