import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/details";
import "./app.scss";
import Root from "./pages/root";
import LandingPage from "./components/landingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
  // {
  //   path: "details",
  //   element: <Details />,
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
