import { useState, useEffect } from "react";
import rain from "../images/rain.webp";
import light from "../images/light.webp";
import sunny from "../images/sun.webp";
import sunnyCloud from "../images/cloud.webp";

const picArr = [sunny, sunnyCloud, rain, light];
const BackgroundChange = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * picArr.length);
      console.log(randomNumber, picArr[randomNumber]);
      setBackgroundImage(picArr[randomNumber]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return backgroundImage;
};

export default BackgroundChange;
