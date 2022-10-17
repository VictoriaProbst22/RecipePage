import React, { useState } from "react";

const SearchBar = (props) => {
    

    const [sTerm, setSTerm] = useState('')

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
        <input id="title" type="text" name="search_term" value={sTerm} onChange={onChange} ></input>
        <button type="submit"> Search </button>
    </div>
   </form> );
}
 
export default SearchBar;