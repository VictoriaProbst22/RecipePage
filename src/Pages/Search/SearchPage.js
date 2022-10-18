import axios from "axios";
import React from "react";


const SearchPage = (props) => {

    //confirm searchResults are held in props with Console Logging
    console.log("Results: ", props.searchResults);


    //Bring Axios POST Functionatlity to add recipes to Recipe Database

    const addRecipe = async (recipeToAdd)=>{
        let newRecipe ={
            "id": recipeToAdd.id,
            "title": recipeToAdd.title,
            "image": recipeToAdd.image,
        }
        console.log("New Recipe: ", newRecipe)
        try {
            let response = await axios.post("http://127.0.0.1:8000/recipes/", newRecipe)
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

  
    
    return ( <div>
             {props.searchResults.map((el, index)=>{
                return(<div>
                  
                    <li>{el.title}</li>
                    <img src={el.image} alt="Screwed Up" />
                    <div>
                    <button onClick={()=> addRecipe(el)}> + Save Recipe</button>
                    </div>
                    <hr></hr>
                </div>)
             })} 
    </div> );
}
 
export default SearchPage;