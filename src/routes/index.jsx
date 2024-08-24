import { createBrowserRouter } from "react-router-dom";

import Explore from "../pages/explore";
import Home from "../pages/home";
import Error from "../pages/error";
import MainLayout from "../layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default routes;
