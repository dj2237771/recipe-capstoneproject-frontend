import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Item from "./Item";
import React from "react";
import Multiselect from "multiselect-react-dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Header from "./Header";

function AllDataAPI() {
  const [results, setResult] = useState([]);
  const [serverLink, setserverLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowITems] = useState(false);
  const healthOptions = [
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
  ];
  const dietOption = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];
  let selectRef = useRef();
  let selectRefTwo = useRef();

  const searchItemInfo = async (e) => {
    e.preventDefault();
    // console.log(selectRef.current.getSelectedItems());

    const itemData = {
      queery: e.target.formSearch.value,
      diet: selectRef.current.getSelectedItems(),
      healthLabels: selectRefTwo.current.getSelectedItems(),
      cuisineType: e.target.cuisineType.value,
      mealType: e.target.mealType.value,
      dishType: e.target.dishType.value,
    };

    console.log(itemData);
    let resultAPI = await axios.post(`${serverLink}/recipeapi`, itemData);
    console.log("inside useEffect AllDataAPI", resultAPI.data);
    setResult(resultAPI.data);
    setShowITems(true);
  };
  return (
    <div>
      <div className="body">
        <Header />
        <h1 className="tittle">Food Art</h1>
        <h3 className="sub-tittle">So what you want to cook today?</h3>
        <div>
          <Form onSubmit={searchItemInfo}>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="Search" placeholder="Enter Search" />
            </Form.Group>

            <Form.Select aria-label="Default select example" id="cuisineType">
              <option value="">Select cuisine type</option>
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

            <Form.Select aria-label="Default select example" id="mealType">
              <option value="">Select meal type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Dinner">Dinner</option>
              <option value="Lunch">Lunch</option>
              <option value="Snack">Snack</option>
              <option value="Teatime">Teatime</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="dishType">
              <option value="">Select dish type</option>
              <option value="Biscuits and cookies">Biscuits and cookies</option>
              <option value="Bread">Bread</option>
              <option value="Cereals">Cereals</option>
              <option value="Condiments and sauces">
                Condiments and sauces
              </option>
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

            <Multiselect
              ref={selectRef}
              id="dietLabels"
              isObject={false}
              onRemove={(event) => {
                console.log(event);
              }}
              onSelect={(event) => {
                console.log(event);
              }}
              options={dietOption}
              showCheckbox
            />
            <Multiselect
              ref={selectRefTwo}
              id="healthLabels"
              isObject={false}
              onRemove={(event) => {
                console.log(event);
              }}
              onSelect={(event) => {
                console.log(event);
              }}
              options={healthOptions}
              showCheckbox
            />

            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
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
