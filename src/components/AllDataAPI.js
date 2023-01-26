import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import React from "react";
import Multiselect from "multiselect-react-dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function AllDataAPI() {
  const [results, setResult] = useState([]);
  const [serverLink, setserverLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowITems] = useState(false);
  const [diet, setDiet] = useState([]);
  const [health, setHealth] = useState([
    "alcohol-cocktail",
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "DASH",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-fat-abs",
    "low-potassium",
    "low-sugar",
    "lupine-free",
  ]);
  const helthOption = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];
  const searchItemInfo = async (e) => {
    e.preventDefault();
    console.log(e.target.dietLabels.value);

    const itemData = {
      queery: e.target.formSearch.value,
      // diet: e.target.dietLabels.selectedValues,
      // healthLabels: e.target.healthLabels.value,
      // cuisineType: e.target.cuisineType.value,
      // mealType: e.target.mealType.value,
      // dishType: e.target.dishType.value,
    };

    console.log(itemData);
    let resultAPI = await axios.get(`${serverLink}/recipeapi`, itemData);
    console.log("inside useEffect AllDataAPI", resultAPI.data);
    setResult(resultAPI.data);
    setShowITems(true);
  };
  return (
    <div>
      <h1>Get digimon chracters</h1>
      <h3>chosse fav digimon</h3>

      <Form onSubmit={searchItemInfo}>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control type="Search" placeholder="Enter Search" />

          <Form.Text className="text-muted">
            Search need to be a ingrediend.
          </Form.Text>
        </Form.Group>

        <Multiselect
          controlId="dietLabels"
          isObject={false}
          onRemove={(event) => {
            console.log(event);
          }}
          onSelect={(event) => {
            console.log(event);
          }}
          options={helthOption}
          selectedValues={[]}
          value={diet}
          showCheckbox
        />
        <Multiselect
          controlId="healthLabels"
          isObject={false}
          onRemove={(event) => {
            console.log(event);
          }}
          onSelect={(event) => {
            console.log(event);
          }}
          options={health}
          selectedValues={[]}
          showCheckbox
        />
        <Form.Select
          aria-label="Default select example"
          controlId="cuisineType"
        >
          <option>Select cuisine type</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="British">British</option>
          <option value="Caribbean">Caribbean</option>
          <option value="central Europe">central Europe</option>
          <option value="Chinese">Chinese</option>
          <option value="eastern Europe">eastern Europe</option>
          <option value="French">French</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Kosher">Kosher</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="middle eastern">middle eastern</option>
          <option value="Nordic">Nordic</option>
          <option value="south American">south American</option>
          <option value="south east Asian">south east Asian</option>
          <option value="world">world</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" controlId="mealType">
          <option>Select meal type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" controlId="dishType">
          <option>Select dish type</option>
          <option value="Biscuits and cookies">Biscuits and cookies</option>
          <option value="Bread">Bread</option>
          <option value="Cereals">Cereals</option>
          <option value="Condiments and sauces">Condiments and sauces</option>
          <option value="Desserts">Desserts</option>
          <option value="Drinks">Drinks</option>
          <option value="Main course">Main course</option>
          <option value="Pancake">Pancake</option>
          <option value="Preps">Preps</option>
          <option value="Preserve">Preserve</option>
          <option value="Salad">Salad</option>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Side dish">Side dish</option>
          <option value="Soup">Soup</option>
          <option value="Starter">Starter</option>
          <option value="Sweets">Sweets</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => <Item key={index} item={item} />)}
      </div>
    </div>
  );
}
export default AllDataAPI;
