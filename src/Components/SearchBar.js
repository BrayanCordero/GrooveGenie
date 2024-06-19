import React, {useCallback, useState} from "react";



function SearchBar(props){

    const [userInput, setUserInput] = useState("")

    const handleChange = useCallback((event) => {
        setUserInput(event.target.value)
    },[])

    const handleClick= useCallback(() =>{
        props.search(userInput)
    }, [props, userInput])

    return(
        <div>
            <div>
                <input onChange={handleChange} type="text" defaultValue={"Search Artist"}></input>
                <br></br>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;