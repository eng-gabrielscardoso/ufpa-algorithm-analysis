import { AxiosResponse } from "axios";
import Service from "./Service";

export interface ICepsResponse {
  status: number;
  statusText: string;
  headers: {
    server: string;
    date: string;
    'content-type': string;
    'transfer-encoding': string;
    connection: string;
    'access-control-allow-origin': string;
    'access-control-allow-methods': string;
    'access-control-allow-headers': string;
    'access-control-allow-credentials': string;
    'access-control-max-age': string;
    expires: string;
    'cache-control': string;
    pragma: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: ((...args: any[]) => any)[] | null;
    transformResponse: ((...args: any[]) => any)[] | null;
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {
      FormData: Function;
      Blob: typeof Blob;
    };
    validateStatus: ((status: number) => boolean) | null;
    headers: {
      Accept: string;
      'User-Agent': string;
      'Accept-Encoding': string;
    };
    baseURL: string;
    method: string;
    url: string;
    data: any;
  };
  request: unknown;
  data: Array<{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }>;
}

export default class CepsService extends Service {
  public static async getCeps(
    state: string = "PA",
    city: string = "Belém",
    neighbour: string = "Belém"
  ): Promise<AxiosResponse<ICepsResponse>> {
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
