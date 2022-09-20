import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CommentObject, Product } from "../../../types/types";
import { getComments, placeComment } from "../../../util/CommentService";
import { ProductListItem } from "../ProductListItem";
import { CommentItem } from "./CommentItem";

export const Comments = (props: { product: Product }) => {
  const navigate = useNavigate();

  const [commentInProgress, setCommentInProgress] = useState<CommentObject>({
    content: "",
    name: "",
  });
  const [comments, setComments] = useState<CommentObject[]>([]);
  const [name, setName] = useState("");

  const submit = (event: any) => {
    event.preventDefault();
    placeComment(commentInProgress, props.product.id);
    setComments(comments.concat(commentInProgress));
  };
  useEffect(() => {
    const comments = getComments(props.product.id);
    if (comments) {
      setComments(JSON.parse(comments));
    }
  }, []);

  const handleChange = (event: any) => {
    event.target.name === "comment"
      ? setCommentInProgress({
          content: event.target.value,
          name: commentInProgress.name,
        })
      : setCommentInProgress({
          name: event.target.value,
          content: commentInProgress.content,
        });
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter your name"
            name="username"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your comment..."
            onChange={handleChange}
            name="comment"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr></hr>
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment}></CommentItem>
      ))}
    </div>
  );
};
