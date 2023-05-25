import configuration from "src/config/configuration";
import RadixSort from "src/core/RadixSort";
import CepsService from "src/service/CepsService";

describe("RadixSort tests", () => {
  /** @test */
  test("should instance a RadixSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rs = new RadixSort(numbers);

    expect(rs).not.toBeNull();
  });

  /** @test */
  test("should order the Belém CEPs using the CepsService", async () => {
    const response = await CepsService.getCeps();

    expect(response).toBeDefined();

    const ceps = response.data.map((data: any) =>
      parseInt(data.cep.split("-").join(""))
    );

    const rs = new RadixSort(ceps);
    const rs1 = new RadixSort(ceps.slice(0, 5));
    const rs2 = new RadixSort(ceps.slice(0, 10));
    const rs3 = new RadixSort(ceps.slice(0, 15));
    const rs4 = new RadixSort(ceps.slice(0, 20));
    const rs5 = new RadixSort(ceps.slice(0, 25));
    const rs6 = new RadixSort(ceps.slice(0, 30));

    if (configuration.appEnv === "test") {
      console.time(
        "Should order 5 Belém CEPs using the CepsService. Total sorting time"
      );
      rs1.sort();
      console.timeEnd(
        "Should order 5 Belém CEPs using the CepsService. Total sorting time"
      );

      console.time(
        "Should order 10 Belém CEPs using the CepsService. Total sorting time"
      );
      rs2.sort();
      console.timeEnd(
        "Should order 10 Belém CEPs using the CepsService. Total sorting time"
      );

      console.time(
        "Should order 15 Belém CEPs using the CepsService. Total sorting time"
      );
      rs3.sort();
      console.timeEnd(
        "Should order 15 Belém CEPs using the CepsService. Total sorting time"
      );

      console.time(
        "Should order 20 Belém CEPs using the CepsService. Total sorting time"
      );
      rs4.sort();
      console.timeEnd(
        "Should order 20 Belém CEPs using the CepsService. Total sorting time"
      );

      console.time(
        "Should order 25 Belém CEPs using the CepsService. Total sorting time"
      );
      rs5.sort();
      console.timeEnd(
        "Should order 25 Belém CEPs using the CepsService. Total sorting time"
      );

      console.time(
        "Should order 30 Belém CEPs using the CepsService. Total sorting time"
      );
      rs6.sort();
      console.timeEnd(
        "Should order 30 Belém CEPs using the CepsService. Total sorting time"
      );
    }

    expect(rs.sort()).toStrictEqual(
      ceps.sort((a: number, b: number): number => a - b)
    );
  });
});
