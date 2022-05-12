import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
import Home from "../containers/Home";
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "/users", element: <Users /> },

      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
