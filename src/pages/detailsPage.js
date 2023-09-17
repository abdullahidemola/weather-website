import Details from "../components/details";
import Search from "../components/search";
import "./detailsPage.scss";

const DetailsPage = () => {
  return (
    <div className="container">
      <h2>home</h2>
      <div className="search-container">
        <Search />
      </div>
      <Details/>
    </div>
  );
};

export default DetailsPage;
