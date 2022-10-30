import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeList = () => {
    //save recipe list in state
    const [recipeList, setRecipeList] = useState([])
    const [ingredientsList, setIngredientsList] = useState([])
    const [instructionsList, setInstructionsList] = useState([])


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

  

      // Get Recipe Instructions
      const getInstructions = async (el) => {
        try {
            let response = await axios.get(`https://api.spoonacular.com/recipes/${el.id}/analyzedInstructions?apiKey=a30a8055bce74d128fd0d69da6ff918a`)
            console.log(response.data)
            setInstructionsList(response.data.steps)
        } catch (error) {
            console.log(error.message)
        }
      }
      console.log("Instructions: ", instructionsList)




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
        {recipeList.map((el, index)=>{
            return(
                <div> 
                    
                    <h4>{index + 1} .) {el.title}</h4>
                    <img src={el.image} alt="Screwed Up" />
            
                <button onClick={()=> getIngredients(el)}>See Ingredients</button>
                
                {ingredientsList.map((el)=>{
                    return(
                        <div>
                            <li> {el.amount.us.value} {el.amount.us.unit} {el.name}</li>
                            </div>
                    )
                })}
                <button onClick={()=> deleteRecipe(el)}>Delete</button>
                <button onClick={()=> getInstructions(el)}> See Instructions </button>
                
                </div>
                
            )   
             
        })}
    
    </div> );
}
 
export default RecipeList;