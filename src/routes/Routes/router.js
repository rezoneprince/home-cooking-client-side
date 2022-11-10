import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Menu from "../../pages/Menu/Menu";
import Register from "../../pages/Register/Register";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
