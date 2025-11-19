import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NavigationRoute } from "./routes";

export const router = createBrowserRouter([
  {
    path: NavigationRoute.Index,
    element: <App />,
    children: []
  }]);