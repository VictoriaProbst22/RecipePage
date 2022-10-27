import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeList = () => {
    //save recipe list in state
    const [recipeList, setRecipeList] = useState([])
    const [ingredientsList, setIngredientsList] = useState([])


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
    

    // Get Recipe by using Recipe ID in Async Function

    const getIngredients = async (el) =>{
        try {
            let response = await axios.get(`https://api.spoonacular.com/recipes/${el.id}/ingredientWidget.json?apiKey=a30a8055bce74d128fd0d69da6ff918a`)
            console.log(response.data)
            setIngredientsList(response.data.ingredients)
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log("Ingredients: ", ingredientsList)

    return ( <div>
        <h2> Saved Recipes: </h2>
        {recipeList.map((el)=>{
            return(
                <div> 
                    <h4>{el.title}</h4>
                    <img src={el.image} alt="Screwed Up" />
            
                <button onClick={()=> getIngredients(el)}>See Ingredients</button>
                <h5> Ingredients: </h5>
                {ingredientsList.map((el)=>{
                    return(
                        <div>
                            <li> {el.name}</li>
                            <ul>{el.amount.us.value} {el.amount.us.unit}</ul> </div>
                    )
                })}
                <button onClick={()=> deleteRecipe(el)}>Delete</button>
                </div>
                
            )   
             
        })}
    
    </div> );
}
 
export default RecipeList;