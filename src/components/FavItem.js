import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function FavItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.recipeName}</Card.Title>
        <Card.Text>{props.item.calories}</Card.Text>
        <Card.Text>{props.item.dietLabels}</Card.Text>
        <Card.Text>{props.item.healthLabels}</Card.Text>
        <Card.Text>{props.item.ingredientLines}</Card.Text>

        <Button
          variant="primary"
          onClick={() => props.showUpdateModalProps(props.item)}
        >
          Update
        </Button>
        <Button
          variant="primary"
          onClick={() => props.deleteMakeup(props.item._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FavItem;
