import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export default routes;
