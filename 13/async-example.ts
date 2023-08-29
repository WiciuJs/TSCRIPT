async function fetchDataFromServer() {
    const delayTime = 2000;
    await new Promise(resolve => setTimeout(resolve, delayTime));
    const data = { id: 1, name: "Example Data" };
    return data;
  }
  
  async function main() {
    try {
      console.log("Pobieranie danych rozpoczęte...");
      const result = await fetchDataFromServer();
      console.log("Pobieranie danych zakończone:", result);
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  }
  main();
  