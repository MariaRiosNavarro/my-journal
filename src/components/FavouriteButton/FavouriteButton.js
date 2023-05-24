import "./FavouriteButton.css";
import { useState } from "react";
import Star from "./star.svg"
import StarFilled from "./star-filled.svg"



export default function FavoriteButton() {
    // this should be a state variable
    const [favorite, setFavorite] = useState(false);
  
    //create the onClick function
    function isFavorite() {
      //here with setFavorite(!favorite), make the toggle functionability
      setFavorite(!favorite);
      console.log("favorite button clicked");
    }
  
    return (
      <button
      className="entries-section__list-item__journal-favourite-button"
        //give the toggle Function-onclick to onclick atribute
        onClick={isFavorite}
        aria-label="favorite"
      >
        {favorite ? <StarFilled /> : <Star />}
      </button>
    );