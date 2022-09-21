import { Card } from "react-bootstrap";
import { CommentObject } from "../../../types/types";

export const CommentItem = (props: { comment: CommentObject }) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <Card.Body>
        <Card.Title>{props.comment.content}</Card.Title>
        <Card.Text>From: {props.comment.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};
