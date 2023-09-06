import { useState } from "react";

import Search from "../components/search";
import { useLocation } from "react-router-dom";

const Home = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <div>
        <h1>details</h1>
        <Search />
      </div>
    </>
  );
};

export default Home;
