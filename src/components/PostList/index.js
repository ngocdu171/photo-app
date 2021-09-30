import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Post from "./Post";
import * as actions from '../../redux/actions'

export default function PostList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])

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
