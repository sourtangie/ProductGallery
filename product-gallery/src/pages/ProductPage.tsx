import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageGallery } from "../components/images/ImageGallery";
import { Comments } from "../components/products/comments/Comments";
import { Product } from "../types/types";

export const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  const init = () => {
    /* save last selected product in local storage in case of refresh, use it if location.state == null */
    const savedProduct = localStorage.getItem("product");
    if (location.state) {
      setProduct(location.state);
      localStorage.setItem("product", JSON.stringify(location.state));
    } else if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  };

  useEffect(() => {
    init();
  }, []);
  return product ? (
    <Container style={{ paddingBottom: "20vh" }}>
      <Button
        style={{ marginTop: "2vh " }}
        variant="light"
        onClick={() => navigate(-1)}
      >
        ← Go back
      </Button>
      <Row className="">
        <Col>
          <p className="fs-2">{product?.title}</p>
          <ImageGallery images={product?.images} />
        </Col>
        <Col style={{ backgroundColor: "lightgray", borderRadius: "5px" }}>
          <p className="fs-2">Price: ${product?.price}</p>
          <p className="fs-3 lh-1">Description</p>
          <p className="">{product?.specification}</p>
          <p className="fs-3 lh-1">Specifications</p>
          <p className="">{product?.description}</p>
        </Col>
        <p className="fs-3">Comments</p>

        <Comments product={product}></Comments>
      </Row>
    </Container>
  ) : (
    /* LOADING STATE */
    <Container style={{ paddingBottom: "20vh" }}>
      <Button
        style={{ marginTop: "2vh " }}
        variant="light"
        onClick={() => navigate(-1)}
      >
        ← Go back
      </Button>
      <Row className="">
        <Col>
          <Spinner animation="border" />
        </Col>
        <Col style={{ backgroundColor: "lightgray" }}></Col>
        <p className="fs-3">Comments</p>
      </Row>
    </Container>
  );
};
