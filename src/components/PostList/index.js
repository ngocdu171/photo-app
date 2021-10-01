import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Spinner } from "reactstrap";
import Post from "./Post";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  const [loading, setLoading] = useState(true);

  console.log(posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostRequest());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <Spinner color="primary" />;
  }
  return (
    <Row>
      <Col xs="12" sm="6">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Col>
    </Row>
  );
}
