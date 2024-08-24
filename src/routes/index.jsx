import { createBrowserRouter } from "react-router-dom";

import Explore from "../pages/explore";
import Home from "../pages/home";
import Error from "../pages/error";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "*", element: <Error /> },
]);

export default routes;
