import React from "react";
import { useState } from "react";
import axios from "axios";


//import pages
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SearchPage from "./Pages/SearchPage"
import SearchBar from "./Pages/SearchBar";

function App() {

  //Hold Information in State:

  const [searchResults, setSearchReults] = useState([]);

  //Use Axios Function to GET Recipe Database

  const runSearch = async (userInput)=>{
    try {
      let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&apiKey=a30a8055bce74d128fd0d69da6ff918a`)
      console.log(response.data)
      setSearchReults(response.data.results); 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  

  return (
    <div >
      <NavBar />
     <h3> Welcome, Search for a Recipe:</h3>
     <SearchBar searchRecipeProps={runSearch} />
     <SearchPage searchResults={searchResults} />
     <Footer />
    </div>
  );
}

export default App;
