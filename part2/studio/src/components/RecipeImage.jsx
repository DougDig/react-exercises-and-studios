import recipedata from "./recipe.json";

function RecipeImage() {
   return <img className="recipeImage" alt={recipedata.description}
    src={recipedata.recipeImage} />
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 