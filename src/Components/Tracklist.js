import React from "react";
import Track from "./Track"

function TrackList(props){

    const track = props.result.map(track =>{
        return(<li key={track.id}>
            <Track track={track}/>
                </li>)
    })
    
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {track}
            </ul>
        </div>
        
    )
}

export default TrackList;