import { useRoutes } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
import { Outlet, Navigate } from "react-router-dom";
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import DefaultLayout from "Layout/DefaultLayout/DefaultLayout";
import Registry from "pages/Registry/Registry";
import Product from "pages/Product/Product";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import Cart from "pages/Cart/Cart";
import Account from "pages/Account/Account";
const Routers = () => {
  const state = useSelector(selectAuth);
  console.log("auth state", state);
  /* const ProtectedRoute = () => {
    // const { isAuthenticated  } = useAppSelector(selectAuth);
    return <Outlet />;
    // return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
  }; */
  const RejectedRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  const elements = useRoutes([
    {
      path: "/login",
      element: (
        <DefaultLayout>
          <Login />
        </DefaultLayout>
      ),
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
      path: "/product/detail",
      element: (
        <DefaultLayout>
          <ProductDetail />
        </DefaultLayout>
      ),
    },
    {
      path: "/cart",
      element: (
        <DefaultLayout>
          <Cart />
        </DefaultLayout>
      ),
    },
    {
      path: "/account",
      element: (
        <DefaultLayout>
          <Account />
        </DefaultLayout>
      ),
    },
    {
      path: "/registry",
      element: <Registry />,
    },
    {
      path: "/cart",
      element: <RejectedRoute />,
      children: [
        {
          path: "/cart",
          element: (
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          ),
        },
      ],
    },
  ]);

  return elements;
};

export default Routers;
