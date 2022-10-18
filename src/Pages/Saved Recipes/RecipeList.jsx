import React from "react";
import axios from "axios";
import { useState } from "react";

const RecipeList = () => {
    //save recipe list in state
    const [recipeList, setRecipeList] = useState([])


    //use axios to get recipe list database
    const getRecipeList = async ()=>{
        try {
            let response = await axios.get('http://127.0.0.1:8000/recipes/')
            console.log(response.data)
            setRecipeList(response.data)
        } catch (error) {
            console.log(error.message.data)
        }
    }
    getRecipeList();


    return ( <div>
        <h2> Saved Recipes: </h2>
        {recipeList.map((el)=>{
            return(
                <div> 
                    <ul>{el.title}</ul>
                    <img src={el.image} alt="Screwed Up" />
                </div>
            )
        })}
    
    </div> );
}
 
export default RecipeList;