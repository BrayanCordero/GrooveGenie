import React from "react";
import Track from "./Track"
import styles from "../Styles/TrackList.module.css"

function TrackList(props){

    const track = props.result.map(track =>{
        return(<li key={track.id}>
            <Track track={track} addTrack={props.addTrack} />
                </li>)
    })
    
    return(
        <div>
            <ul className={styles.track_list_ul} style={{listStyle:"none", padding:0, margin:0}}>
                {track}
            </ul>
        </div>
        
    )
}

export default TrackList;