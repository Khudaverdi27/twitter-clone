import { createBrowserRouter } from "react-router-dom";

import Explore from "../pages/explore";
import Home from "../pages/home";
import Error from "../pages/error";
import MainLayout from "../layout/MainLayout";
import Profile from "../pages/profile";
import Notifications from "../pages/notifications";
import Messages from "../pages/messages";
import Grok from "../pages/Grok";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "notifications", element: <Notifications /> },
      { path: "messages", element: <Messages /> },
      { path: "grok", element: <Grok /> },
      { path: ":slug/:user", element: <Profile /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default routes;
