import React, {useState} from "react";



function SearchBar(props){

    const [userInput, setUserInput] = useState("")

    function handleChange(e){
        setUserInput(e.target.value)
    }

    function handleClick(){
        setUserInput("")
    }

    return(
        <div>
            <div>
                <input onChange={handleChange} type="text" value={userInput}></input>
                <br></br>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;