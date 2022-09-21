import { Col, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledListGroupItem = styled(ListGroup.Item)`
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5px;
  height: 15vh;

  :hover {
    border: 1px solid #280003;
    cursor: pointer;
    div {
      color: #280003;
    }
  }
  img {
    max-height: 95%;
    max-width: 95%;
  }
`;

export const StyledListGroupItemRow = styled(Row)`
  align-content: center;
  height: 100%;
  width: 100%;
`;

export const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
`;
