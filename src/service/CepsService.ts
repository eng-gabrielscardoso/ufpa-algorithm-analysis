import Service from "./Service";

export default class CepsService extends Service {
  public static async getCeps(
    state: string = "PA",
    city: string = "Belém",
    neighbour: string = "Belém"
  ): Promise<unknown> {
    try {
      const response = await this.httpClient.get(
        `/${state}/${city}/${neighbour}/json`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
