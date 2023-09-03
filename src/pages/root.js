import { Outlet } from "react-router-dom";
import Search from "../components/search";

const Root = () => {
  return (
    <>
      <Search />
      <Outlet/>
    </>
  );
};

export default Root;
