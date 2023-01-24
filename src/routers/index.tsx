import { Route, Routes /* useRoutes */ } from "react-router-dom";
import React from "react";
/* import { Outlet, Navigate } from "react-router-dom"; */
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import Registry from "pages/Registry/Registry";
import DefaultLayout from "Layout/DefaultLayout/DefaultLayout";
import Product from "pages/Product/Product";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/product"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
      <Route path="/registry" element={<Registry />} />
    </Routes>
  );
};

export default Router;
