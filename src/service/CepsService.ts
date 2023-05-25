import { AxiosResponse } from "axios";
import Service from "./Service";

export default class CepsService extends Service {
  public static async getCeps(
    state: string = "PA",
    city: string = "Belém",
    neighbour: string = "Belém"
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await this.httpClient.get(
        `/${state}/${city}/${neighbour}/json`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
