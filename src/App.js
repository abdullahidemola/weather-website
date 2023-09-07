import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import LandingPage from "./components/landingPage";
import Details from "./pages/details";


const router = createBrowserRouter([
  
  { path: "", element: <LandingPage /> },
  {
    path: "details",
    element: <Details />,
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
