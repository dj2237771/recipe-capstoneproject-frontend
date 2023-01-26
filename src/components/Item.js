import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Item(props) {
  const [serverLink, setserverLink] = useState(process.env.REACT_APP_SERVER);
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const addToFav = async (recipe) => {
    recipe["userName"] = user.email || user.nickname;

    await axios.post(`${serverLink}/favrecipe`, recipe);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.label}</Card.Title>
        <Card.Text>{props.item.calories}</Card.Text>
        <Card.Text>{props.item.ingredientLines}</Card.Text>
        <Card.Text>{props.item.url}</Card.Text>
        {isAuthenticated && (
          <Button
            variant="primary"
            onClick={() => {
              addToFav(props.item);
            }}
          >
            ADD FAV
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Item;
