import React, { useState } from "react";
import * as types from "../../types/types";
import { ImageItem } from "./ImageItem";
import {
  CenterImageDiv,
  StyledImageContainer,
  StyledImageGalleryRow,
} from "./StyledImages";

export const ImageGallery = (props: { images: types.Image[] }) => {
  const [selectedImage, setSelectedImage] = useState<types.Image>(
    props.images[0]
  );

  const handleSelectImage = (selectImage: types.Image) => {
    setSelectedImage(selectImage);
  };

  return (
    <div>
      <CenterImageDiv>
        <ImageItem large image={selectedImage}></ImageItem>
      </CenterImageDiv>
      <StyledImageGalleryRow>
        {props.images.map((image, index) => (
          <StyledImageContainer
            onClick={() => handleSelectImage(image)}
            key={index}
          >
            <ImageItem
              image={image}
              large={false}
              className={selectedImage == image ? "selected" : ""}
            />
          </StyledImageContainer>
        ))}
      </StyledImageGalleryRow>
    </div>
  );
};
