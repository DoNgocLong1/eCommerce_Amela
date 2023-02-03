import { useRoutes } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
/* import { Outlet, Navigate } from "react-router-dom"; */
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import DefaultLayout from "Layout/DefaultLayout/DefaultLayout";
import Registry from "pages/Registry/Registry";
import Product from "pages/Product/Product";
const Routers = () => {
  const state = useSelector(selectAuth);
  console.log("auth state", state);
  /* const ProtectedRoute = () => {
    // const { isAuthenticated  } = useAppSelector(selectAuth);
    return <Outlet />;
    // return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
  }; */
  /*   const token = localStorage.getItem("token");
  const RejectedRoute = () => {
    return token ? <Outlet /> : <Navigate to="/" />;
  }; */
  const elements = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      ),
    },
    {
      path: "/product",
      element: (
        <DefaultLayout>
          <Product />
        </DefaultLayout>
      ),
    },
    {
      path: "/registry",
      element: <Registry />,
    },
    /* {
      path: "/login",
      element: <RejectedRoute />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    }, */
  ]);

  return elements;
};

export default Routers;
