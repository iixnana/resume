import { createBrowserRouter, Navigate } from "react-router-dom";
import { NavigationRoute } from "./routes";
import { Contact } from "../app/pages/ContactMe/Contact";
import App from "../app/App";
import { NotFound } from "../app/pages/Error/NotFound";
import { Home } from "../app/pages/Home/Home.page";

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
