import React from "react";
import Track from "./Track"

function TrackList(props){
    
    return(
        <div>
            {props.result.map((track) => {
                return(
                    <Track key={track.id} track={track} />
                )
            })}
        </div>
        
    )
}

export default TrackList;