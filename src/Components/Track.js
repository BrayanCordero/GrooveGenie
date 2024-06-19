import React from "react";
import styles from "../Styles/Track.module.css"

function Track(props){
    // console.log(props.album)
    return(
        <div className={styles.container}>
            <div>
                <h2>Track Name: {props.track.trackName}</h2>
                <h2>Artist: {props.track.artist}</h2>
                <h2>Album: {props.track.album}</h2>
            </div>
            <button className={styles.Button}>+</button>
        </div>
    )
}

export default Track;