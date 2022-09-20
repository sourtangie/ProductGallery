import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CommentObject, Product } from "../../../types/types";
import { getComments, placeComment } from "../../../util/CommentService";
import { ProductListItem } from "../ProductListItem";

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
