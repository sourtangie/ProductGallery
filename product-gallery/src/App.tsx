import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as dataFunctions from "./util/GetData";
import { Product } from "./types/types";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductGallery } from "./pages/ProductGallery";
import { ProductPage } from "./pages/ProductPage";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path={"/products"} element={<ProductGallery />} />
          <Route path={"/products/:productID"} element={<ProductPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
