import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
// import Root from "./pages/root";
import LandingPage from "./components/landingPage";
// import Home from "./pages/home";
import Details from "./pages/details";


const router = createBrowserRouter([
  // {
  // path: "/",
  // element: <Root />,
  // children: [
  { path: "", element: <LandingPage /> },
  {
    path: "details",
    element: <Details />,
  },
  // ],
  // },
]);
function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
