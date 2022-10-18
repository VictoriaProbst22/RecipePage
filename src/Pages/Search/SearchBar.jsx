import React, { useState } from "react";

const SearchBar = (props) => {
    
    //set search term in state
    const [sTerm, setSTerm] = useState('')


    //prevent default page refresh
    function handleSubmit(event){
        event.preventDefault();

            console.log(sTerm);
        props.searchRecipeProps(sTerm);
        
    }

    const onChange = (event) =>{
        const { value } = event.target
        setSTerm(value)
    }


    
    return ( <form className="frontPage" onSubmit={handleSubmit} >
    <div >
        <input type="text" name="search_term" value={sTerm} onChange={onChange} ></input>
        <button type="submit"> Search </button>
    </div>
   </form> );
}
 
export default SearchBar;