import { Badge, Col, Image, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../../types/types";
import {
  CenterCol,
  StyledListGroupItem,
  StyledListGroupItemRow,
} from "./StyledProductList";

export const ProductListItem = (props: { item: Product; onClick: any }) => {
  return (
    <StyledListGroupItem
      as="li"
      className="d-flex justify-content-between align-items-start"
      onClick={props.onClick}
    >
      <StyledListGroupItemRow>
        <CenterCol xs={3} style={{ height: "100%" }}>
          <Image rounded src={props.item.images[0].thumb} />
        </CenterCol>
        <CenterCol xs={5}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.item.title}</div>
          </div>
        </CenterCol>
        <CenterCol>
          <h5>
            <Badge bg="success" pill>
              $ {props.item.price}
            </Badge>
          </h5>
        </CenterCol>
      </StyledListGroupItemRow>
    </StyledListGroupItem>
  );
};
