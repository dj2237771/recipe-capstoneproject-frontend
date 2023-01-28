import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function UpdateRecipeModal(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const updateItemInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      recipeName: e.target.recipeName.value,
      calories: e.target.calories.value,
      dietLabels: e.target.dietLabels.value,
      healthLabels: e.target.healthLabels.value,
      cuisineType: e.target.cuisineType.value,
      mealType: e.target.mealType.value,
      dishType: e.target.dishType.value,
      ingredientLines: e.target.ingredientLines.value,
    };
    console.log(itemData);

    const resultsUpdate = await axios.put(
      `${serverLink}/favrecipe/${props.itemIndex}`,
      itemData
    );
    props.handleClose();
    props.updateRecipes(resultsUpdate.data);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title defaultValue={props.itemInfo.recipeName}></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateItemInfo}>
          <Form.Group controlId="recipeName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.recipeName}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="calories">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.calories}
              type="text"
              name="brand"
            />
          </Form.Group>
          <Form.Group controlId="dietLabels">
            <Form.Label>diet Labels</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.dietLabels}
              type="text"
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="healthLabels">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.healthLabels}
              type="text"
              name="image"
            />
          </Form.Group>
          <Form.Group controlId="cuisineType">
            <Form.Label>Product disruption</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.cuisineType}
              type="text"
              name="disruption"
            />
          </Form.Group>
          <Form.Group controlId="mealType">
            <Form.Label>Product disruption</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.mealType}
              type="text"
              name="disruption"
            />
          </Form.Group>
          <Form.Group controlId="dishType">
            <Form.Label>Dish Type</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.dishType}
              type="text"
              name="disruption"
            />
          </Form.Group>
          <Form.Group controlId="ingredientLines">
            <Form.Label>Ingredient disruption</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.ingredientLines}
              type="text"
              name="disruption"
            />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Update Item
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdateRecipeModal;
