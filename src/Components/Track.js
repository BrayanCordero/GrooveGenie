import React, { useCallback } from "react";
import styles from "../Styles/Track.module.css"

function Track(props){
    
    const addTrack = useCallback(
        (event) => {
            props.addTrack(props.track)
        },
        [props.addTrack, props.track]
    )

    return(
        <div className={styles.container}>
            <div>
                <h2>Track Name: {props.track.trackName}</h2>
                <h2>Artist: {props.track.artist}</h2>
                <h2>Album: {props.track.album}</h2>
            </div>
            <button className={styles.Button} onClick={addTrack} >+</button>
        </div>
    )
}

export default Track;