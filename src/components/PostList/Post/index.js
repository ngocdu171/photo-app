import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
} from "reactstrap";

export default function Post() {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="https://i.dlpng.com/static/png/6956654_preview.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
      <CardFooter>
      <i class='bx bxs-heart bx-lg' ></i>
      </CardFooter>
    </Card>
  );
}
