import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

export const StyledImageItem = styled(Image)`
  ${(props) =>
    props.className?.includes("selected") ? "border:2px solid blue" : ""}
`;

export const StyledImageContainer = styled.div`
  width: initial;
  margin-top: 10px;
`;

export const StyledImageGalleryRow = styled(Row)`
  flex-direction: row;
  justify-content: flex-start;
`;
