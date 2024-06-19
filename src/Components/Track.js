import React, { useCallback } from "react";
import styles from "../Styles/Track.module.css"

function Track(props){
    
    const addTrack = useCallback(
        (event) => {
            props.addTrack(props.track)
        },
        [props.addTrack, props.track]
    )

    const removeTrack = useCallback(
        (event) => {
            props.removeTrack(props.track)
        },
        [props.removeTrack, props.track]
    )
    //checks for what kind of button to render, + or - 
    const buttonRender = () => {
        if(props.isRemove){
            return (
                <button className={styles.Button} onClick={removeTrack} >-</button>
            )
        }

        return (
            <button className={styles.Button} onClick={addTrack} >+</button>
        )
    }

    return(
        <div className={styles.container}>
            <div>
                <h2>Track Name: {props.track.trackName}</h2>
                <h2>Artist: {props.track.artist}</h2>
                <h2>Album: {props.track.album}</h2>
            </div>
            {buttonRender()}
        </div>
    )
}

export default Track;