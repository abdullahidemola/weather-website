import { createHashRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/detailsPage";
import HomePage from "./components/homePage";

const router = createHashRouter([
  { path: "", element: <HomePage /> },
  {
    path: "/details",
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
