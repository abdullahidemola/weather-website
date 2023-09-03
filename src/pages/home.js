import { useState } from "react";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const [currentForecast, setCurrentForecast] = useState(null);



  console.log(currentForecast);
  console.log(currentWeather);
  return (
    <>
      <div>
        <h1>details</h1>
      </div>
    </>
  );
};

export default Home;
