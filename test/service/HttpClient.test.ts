import HttpClient from "src/service/HttpClient";

describe("HTTP Client tests", () => {
  /** @test */
  test("should instance correctly an HTTP Client", async () => {
    const httpClient = new HttpClient();

    expect(httpClient).not.toBeNull();
  });

  /** @test */
  test("should accept an alternative URL", async () => {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

    const response = await httpClient.get("/posts");

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
    expect(typeof response).toBe("object");
  });

  /** @test */
  test("should make a GET request", async () => {
    const httpClient = new HttpClient();

    const response = await httpClient.get("/68445000/json");

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
    expect(typeof response).toBe("object");
  });

  /** @test */
  test("should make a POST request", async () => {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

    const response = await httpClient.post(
      "/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    expect(response.status).toBe(201);
    expect(response).toBeDefined();
    expect(typeof response).toBe("object");
    expect(response.data.title).toBe("foo");
    expect(response.data.body).toBe("bar");
    expect(response.data.userId).toBe(1);
  });

  /** @test */
  test("should make a PUT request", async () => {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

    const response = await httpClient.put(
      "/posts/1",
      {
        title: "bar",
        body: "foo",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
    expect(typeof response).toBe("object");
    expect(response.data.title).toBe("bar");
    expect(response.data.body).toBe("foo");
    expect(response.data.userId).toBe(1);
  });

  /** @test */
  test("should make a PATCH request", async () => {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

    const response = await httpClient.patch(
      "/posts/1",
      {
        title: "blah",
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
    expect(typeof response).toBe("object");
    expect(response.data.title).toBe("blah");
  });

  /** @test */
  test("should make a DELETE request", async () => {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");

    const response = await httpClient.delete("/posts/1");

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
  });
});
