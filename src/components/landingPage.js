import "./landingPage.scss";
import Search from "./search";

const LandingPage = () => {
  return (
    <div className="header">
      <h1 className="text">Get current weather and 7-day forecast</h1>
      <Search />
    </div>
  );
};

export default LandingPage;
