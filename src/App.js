import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import Root from "./pages/root";
import LandingPage from "./components/landingPage";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "details",
        element: <Home />,
      },
    ],
  },
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
