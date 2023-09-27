import "./homePage.scss";
import Search from "./search";

const HomePage = () => {
  return (
    <div className="header">
      <h1 className="text">Get current weather and 7-day forecast</h1>
      <Search className="search-icon" />
    </div>
  );
};

export default HomePage;
