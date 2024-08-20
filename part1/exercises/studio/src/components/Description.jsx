//import React from "react";
import styles from "./Description.module.css"

function RecipeAuthor() {
    let authorLink = "";
    let authorName = "Mr Pants";
    let authorPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvj5RPY1aIOfglKh2wyqban6AEDm1xYo_Dcg&s";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Krabby Times</a> 
           </div>
        </div>
     );
}

function RecipeDescription() {
    return (
        <div> 
            <div>
                <h1>Krabby Patty</h1>
                <p>It's a Krabby Patty what more could you ask for?</p>
            </div>
            <RecipeAuthor />
        </div>
    )
}

export default RecipeDescription;