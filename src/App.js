import './App.css';
import React, { useCallback, useState } from "react";
import SearchBar from "./Components/SearchBar"; 
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import styles from "./Styles/SearchResults.module.css"

const list = [
  {id:0, album:"Master of Puppets", artist:"Metallica", trackName:"Master of Puppets"},
  {id:1, album:"Toxicity", artist:"System of a Down", trackName:"Toxicity"},
  {id:2, album:"Ride the Lightning", artist:"Metallica", trackName:"Ride the Lightning"}
]


function App() {

  const [searchResults, setSearchResults] = useState(list)
  const [playlistName, setPlaylistName] = useState("Playlist Name")
  const [playlist, setPlaylist] = useState([])

const addToPlaylist = useCallback((track) => {
  if(playlist.some((savedTrack) => savedTrack.id === track.id))
    return;

  setPlaylist(prevTrack => [...prevTrack, track])
}, [playlist]
) 

  return (
    <div className="App">
      <h1>Playlist Maker</h1>
      <SearchBar />
      <div id="result-playlist-container">
        <div className={styles.div}>
          <SearchResults searchResults={searchResults} addTrack={addToPlaylist} />
        </div>
        <div className={styles.div}>
          <Playlist playlist={playlist} />
        </div>
      </div>
    </div>
  );
}

export default App;
