import React, { useCallback } from "react";
import Track from "./Track"

function Playlist(props){

    const updateName = useCallback((event) => {
        props.updatePlaylistName(event.target.value)
    }, [props.updatePlaylistName])

    const track = props.playlist.map(track => {
        return(<li key={track.id}>
            <Track track={track} isRemove={true} removeTrack={props.removeTrack} />
        </li>)
    })

    return (
        <div>
            <input type="text" onChange={updateName} defaultValue={"New Playlist"} ></input>
            <ul style={{listStyle:"none"}}>
                {track}
            </ul>
            <br></br>
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;