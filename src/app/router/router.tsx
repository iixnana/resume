import { createBrowserRouter } from "react-router-dom";
import { NavigationRoute } from "./routes";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: NavigationRoute.Index,
    element: <Home />,
    children: [],
  },
]);
