import data from "./recipe.json";

function List(){
  const listContent = (props) => {
    return props.map((ingredient) => <li key={props.index}>{ingredient}</li>);
    }
    return <ul>{listContent(data.ingredients)}</ul>
  }    

function IngredientList() {
   return <div>
    <h3>Ingredients</h3>
      <List props = {data.ingredients}/>
   </div>
 }
 


 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 