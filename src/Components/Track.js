import React from "react";
import styles from "../Styles/Track.module.css"

function Track(){
    return(
        <div className={styles.container}>
            <h2>Track Name:</h2>
            <h2>Artist:</h2>
            <h2>Album:</h2>
        </div>
    )
}

export default Track;