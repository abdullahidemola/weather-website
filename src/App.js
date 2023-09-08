import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import DetailsPage from "./pages/detailsPage";
import HomePage from "./components/homePage";

const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  {
    path: "details/",
    element: <DetailsPage />,
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
