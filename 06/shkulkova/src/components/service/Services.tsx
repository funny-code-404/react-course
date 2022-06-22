import axios from "axios";

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
}
