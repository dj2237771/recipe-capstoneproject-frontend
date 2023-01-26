import { useEffect, useState } from "react";
import axios from "axios";
import FavItem from "./FavItem";
import UpdateRecipeModal from "./UpdateRecipeModal";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function MyFavorites() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [index, setIndex] = useState(0);
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    const getFavRecipe = async () => {
      let username = user.email || user.nickname || "dj2237771";
      console.log(username);
      let resultRecipe = await axios.get(
        `${serverLink}/favrecipe?username=${username}`
      );
      console.log("favrecipe", resultRecipe.data);
      setResults(resultRecipe.data);
      setShowItems(true);
    };
    getFavRecipe();
  }, []);

  const deleteRecipe = async (index) => {
    let resultsRecipe = await axios.delete(`${serverLink}/favrecipe/${index}`);
    setResults(resultsRecipe.data);
    // setShowItems(true);
  };

  const showUpdateModal = async (chosenItem) => {
    setShowUpdateModalStatus(true);
    setItemInfo(chosenItem);
    setIndex(chosenItem._id);
  };

  const handleCloseUpdate = () => {
    setShowUpdateModalStatus(false);
  };

  const updateRecipes = (results) => {
    setResults(results);
  };

  return (
    <div>
      <h1>Your Favorites Digimon</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => (
            <FavItem
              key={index}
              item={item}
              deleteRecipe={deleteRecipe}
              showUpdateModalProps={showUpdateModal}
            />
          ))}
      </div>

      <UpdateRecipeModal
        show={showUpdateModalStatus}
        handleClose={handleCloseUpdate}
        itemInfo={itemInfo}
        itemIndex={index}
        updateRecipes={updateRecipes}
      />
    </div>
  );
}

export default MyFavorites;
