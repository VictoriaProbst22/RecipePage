import React from "react";


const SearchPage = (props) => {
    console.log("Results: ", props.searchResults);


  
    
    return ( <div>
             {props.searchResults.map((el)=>{
                return(<div>
                    <li>{el.title}</li>
                    <ul>{el.image}</ul>
                    <hr></hr>
                </div>)
             })} 
    </div> );
}
 
export default SearchPage;