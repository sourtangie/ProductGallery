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
      style={{ maxHeight: "30vh", maxWidth: "30vw" }}
    />
  ) : (
    <StyledImageItem
      thumbnail
      src={props.image.thumb}
      className={props.className}
      style={{ maxHeight: "15vh", maxWidth: "15vw" }}
    />
  );
};
