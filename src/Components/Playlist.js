import React from "react";
import Track from "./Track"

function Playlist(props){

    const track = props.playlist.map(track => {
        return(<li key={track.id}>
            <Track track={track} isRemove={true} removeTrack={props.removeTrack} />
        </li>)
    })

    return (
        <div>
            <input type="text" placeholder="Play List Name"></input>
            <ul style={{listStyle:"none"}}>
                {track}
            </ul>
            <br></br>
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;