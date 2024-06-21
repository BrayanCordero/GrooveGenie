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
                <button className={styles.button_remove} onClick={removeTrack} >-</button>
            )
        }

        return (
            <button className={styles.button_add} onClick={addTrack} >+</button>
        )
    }

    return(
        <div className={styles.track_container}>
            <div className={styles.track_details}>
                <h2 className={styles.track_name}>Track Name: {props.track.name}</h2>
                <h2 className={styles.track_artist}>Artist: {props.track.artist}</h2>
                <h2 className={styles.track_album}>Album: {props.track.album}</h2>
            </div>
            {buttonRender()}
        </div>
    )
}

export default Track;