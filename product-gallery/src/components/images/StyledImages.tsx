import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { ImageItem } from "./ImageItem";

export const StyledImageItem = styled(Image)`
  ${(props) =>
    props.className?.includes("selected") ? "border:2px solid blue" : ""}
`;
