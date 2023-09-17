import "./details.scss";
import { useSelector } from "react-redux";

const Details = () => {
  const weatherFetch = useSelector((state) => state.fetchHandler);
  console.log(weatherFetch);
  return (
    <div className="details-container">
      <h6>Ademide to the moon</h6>
    </div>
  );
};

export default Details;
