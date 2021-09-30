import React from "react";
import { Col, Container, Row } from "reactstrap";
import Post from "./Post";

export default function PostList() {
  return (
    <Row>
      <Col xs="12" sm="6">
        <Post />
      </Col>
      <Col xs="12" sm="6">
        <Post />
      </Col>
      <Col xs="12" sm="6">
        <Post />
      </Col>
    </Row>
  );
}
