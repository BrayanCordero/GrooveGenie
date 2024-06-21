import React, {useCallback, useState} from "react";
import styles from "../Styles/SearchBar.module.css"



function SearchBar(props){

    const [userInput, setUserInput] = useState("")

    const handleChange = useCallback((event) => {
        setUserInput(event.target.value)
    },[])

    const handleClick= useCallback(() =>{
        props.search(userInput)
    }, [props, userInput])

    return(
        <div className={styles.container}>
            <input className={styles.box} onChange={handleChange} type="text" defaultValue={"Search Artist"}></input>
            <button className={styles.button} onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;