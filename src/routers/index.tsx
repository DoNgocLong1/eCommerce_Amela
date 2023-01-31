import { useRoutes } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
import { Outlet, Navigate } from "react-router-dom";
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import DefaultLayout from "Layout/DefaultLayout/DefaultLayout";
import Registry from "pages/Registry/Registry";
const Routers = () => {
  const state = useSelector(selectAuth);
  console.log(state);
  /* const ProtectedRoute = () => {
    // const { isAuthenticated  } = useAppSelector(selectAuth);
    return <Outlet />;
    // return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
  }; */
  const RejectedRoute = () => {
    return !state.isAuthenticated ? <Outlet /> : <Navigate to="/task" />;
  };
  const elements = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      ),
    },
    {
      path: "/registry",
      element: <Registry />,
    },
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return elements;
};

export default Routers;
