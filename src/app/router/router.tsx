import { createBrowserRouter, Navigate } from "react-router-dom";
import { NavigationRoute } from "./routes";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/ContactMe/Contact";
import App from "../App";
import { NotFound } from "../pages/Error/NotFound";

export const router = createBrowserRouter([
  {
    path: NavigationRoute.Index,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: NavigationRoute.Contact,
        element: <Contact />,
      },
      {
        path: NavigationRoute.NotFound,
        element: <NotFound />,
      },
      { path: "*", element: <Navigate to={NavigationRoute.NotFound} /> },
    ],
  },
]);
