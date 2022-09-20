import { Pagination, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ProductList } from "../../components/products/ProductList";
import * as dataFunctions from "../../util/GetData";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import * as types from "../../types/types";
import { ImageItem } from "./ImageItem";

export const ImageGallery = (props: { images: types.Image[] }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<types.Image>(
    props.images[0]
  );

  const handleSelectImage = (selectImage: types.Image) => {
    setSelectedImage(selectImage);
  };

  return (
    <div>
      <div style={{ width: "777px", height: "480px" }}>
        <ImageItem large image={selectedImage}></ImageItem>
      </div>
      <Row style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        {props.images.map((image, index) => (
          <div
            onClick={() => handleSelectImage(image)}
            style={{ width: "initial", marginTop: "10px" }}
            key={index}
          >
            <ImageItem
              image={image}
              large={false}
              className={selectedImage == image ? "selected" : ""}
            />
          </div>
        ))}
      </Row>
    </div>
  );
};
