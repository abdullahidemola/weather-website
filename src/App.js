import { useEffect } from "react";
import Home from "./pages/home";

const requestParams = {
  key: "f17e16cdde684d09bcc215903232306",
  q: "Paris",
};
function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=f17e16cdde684d09bcc215903232306&q=" +
          requestParams.q,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
