import { Dashboard } from "../pages/Main/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Auth/login";
import React from 'react'
import Register from "../pages/Auth/register";
import { RouteObject } from "react-router-dom";
import RoutesEnum from "../shared/enums/routes.enum";
const routesConfig: RouteObject[] = [
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
  },
  { path: RoutesEnum.REGISTER, element: <Register /> },
  { path: RoutesEnum.HOME, element: <Dashboard /> },
  // {
  //   element: <PublicHoc />,
  //   children: [
  //     {
  //       path: RoutesEnum.HOME,
  //       element: <Home />
  //     },
  //     {
  //       path: RoutesEnum.AUTH,
  //       element: <Auth />
  //     }
  //   ]
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routesConfig;
