import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as dataFunctions from "./util/GetData";
import { Product } from "./types/types";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductGallery } from "./pages/ProductGallery";
import { ProductPage } from "./pages/ProductPage";

import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route
            path="/ProductGallery"
            element={<Navigate to="/ProductGallery/products" />}
          />
          <Route
            path={"/ProductGallery/products"}
            element={<ProductGallery />}
          />
          <Route
            path={"/ProductGallery/products/:productID"}
            element={<ProductPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
