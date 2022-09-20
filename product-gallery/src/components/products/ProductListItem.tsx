import React, { MouseEventHandler } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../../types/types";

const StyledListGroupItem = styled(ListGroup.Item)`
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5px;

  :hover {
    border: 1px solid #280003;
    cursor: pointer;
    div {
      color: #280003;
    }
  }
  img {
    max-height: 200px;
  }
`;

export const ProductListItem = (props: { item: Product; onClick: any }) => {
  return (
    <StyledListGroupItem
      as="li"
      className="d-flex justify-content-between align-items-start"
      onClick={props.onClick}
    >
      <Row style={{ alignContent: "center", height: "100%", width: "100%" }}>
        <Col xs={3} style={{ height: "100%" }}>
          <Image rounded src={props.item.images[0].thumb} />
        </Col>
        <Col>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.item.title}</div>
          </div>{" "}
        </Col>{" "}
      </Row>
      <h5>
        <Badge bg="success" pill>
          $ {props.item.price}
        </Badge>
      </h5>
    </StyledListGroupItem>
  );
};
