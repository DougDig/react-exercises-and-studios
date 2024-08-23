import data from "./recipe.json";
import "./styling.css";




function AuthorInfo() {
  const recipeAuthorImage = <img src={data.authorImage} alt={data.author} className="authorImage"/>
  const recipeAuthor = <div>{data.author}</div>
  const recipeWebsite = <a href={data.website}>Website Link</a>
   return <div>
          {recipeAuthorImage}
          {recipeAuthor}
          {recipeWebsite}
      </div>;
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 