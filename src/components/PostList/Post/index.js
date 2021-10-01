import moment from "moment";
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardHeader,
  CardFooter,
  Row,
} from "reactstrap";

export default function Post({ post }) {
  console.log("in ra tu post: ", post);
  return (
    <Card>
      <CardHeader>
        <p>{post.author}</p>
        <p>{moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}</p>
      </CardHeader>
      <CardBody>
        <CardImg top width="100%" src={post.attachment} alt="Card image cap" />
        <CardTitle tag="h5">{post.title}</CardTitle>
        <CardText>{post.content}</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>
        <i class="bx bxs-heart bx-lg">{post.likeCount}</i>
      </CardFooter>
    </Card>
  );
}
