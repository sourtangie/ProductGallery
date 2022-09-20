import { Pagination, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ProductList } from "../../components/products/ProductList";
import * as dataFunctions from "../../util/GetData";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import * as types from "../../types/types";
import { StyledImageItem } from "./StyledImages";

export const ImageItem = (props: {
  image: types.Image;
  large: boolean;
  className?: string;
}) => {
  return props.large ? (
    <StyledImageItem
      src={props.image.original}
      style={{ maxHeight: "480px", maxWidth: "777px" }}
    />
  ) : (
    <StyledImageItem
      thumbnail
      src={props.image.thumb}
      className={props.className}
    />
  );
};
