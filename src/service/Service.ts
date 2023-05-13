import HttpClient from "./HttpClient";

export default class Service {
  protected static httpClient: HttpClient = new HttpClient();

  constructor() {}
}
