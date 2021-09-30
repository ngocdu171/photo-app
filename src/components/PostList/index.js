import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Post from "./Post";
import * as actions from '../../redux/actions'
import { postsState$ } from "../../redux/selectors";

export default function PostList() {

    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log(posts);

    useEffect(() => {
        dispatch(actions.getPosts.getPostRequest());
    }, [dispatch]);

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
