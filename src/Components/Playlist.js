import React, { useCallback } from "react";
import Track from "./Track"
import styles from "../Styles/Playlist.module.css"

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
        <div className={styles.playlist}>
            <input className={styles.name} type="text" onChange={updateName} defaultValue={"New Playlist"} ></input>
            <ul className={styles.playlist_ul}>
                {track}
            </ul>
            <button className={styles.playlist_button} onClick={props.savePlaylist} >Save to Spotify</button>
        </div>
    )
}

export default Playlist;