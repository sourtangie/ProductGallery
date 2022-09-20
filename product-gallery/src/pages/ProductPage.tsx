import { Button, Col, Pagination, Row } from "react-bootstrap";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { ImageGallery } from "../components/images/ImageGallery";
import { Comments } from "../components/products/comments/Comments";

export const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  return (
    <div style={{ paddingBottom: "20vh" }}>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <Row className="">
        <Col>
          <p className="fs-2">{product.title}</p>
          <ImageGallery images={product.images} />
        </Col>
        <Col>
          <p className="fs-2">Now for: {product.price} !</p>
          <p className="fs-3 lh-1">Description</p>
          <p className="">{product.specification}</p>
          <p className="fs-3 lh-1">Specifications</p>
          <p className="">{product.description}</p>
        </Col>
        <p className="fs-3">Comments</p>

        <Comments product={product}></Comments>
      </Row>
    </div>
  );
};
