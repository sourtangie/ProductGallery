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
      style={{ maxHeight: "50vh", maxWidth: "50vw" }}
    />
  ) : (
    <StyledImageItem
      thumbnail
      src={props.image.thumb}
      className={props.className}
    />
  );
};
