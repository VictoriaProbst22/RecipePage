import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeList = () => {
    //save recipe list in state
    const [recipeList, setRecipeList] = useState([])


    //use axios to get recipe list database


    useEffect(() => {
        const getRecipeList = async () => {
          try {
            let response = await axios.get('http://127.0.0.1:8000/recipes/');
            setRecipeList(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        getRecipeList();
      }, []);









    //Delete Recipe From Database

    const deleteRecipe = async (el)=>{
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/recipes/${el.id}/`)
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }


    return ( <div>
        <h2> Saved Recipes: </h2>
        {recipeList.map((el)=>{
            return(
                <div> 
                    <h4>{el.title}</h4>
                    <img src={el.image} alt="Screwed Up" />
                <button onClick={()=> deleteRecipe(el)}>Delete</button>
                </div>
                
            )
        })}
    
    </div> );
}
 
export default RecipeList;