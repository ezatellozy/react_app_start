import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/index";

// Auth pages
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",

    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
