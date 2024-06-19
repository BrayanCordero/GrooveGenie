import './App.css';
import React, { useCallback, useState } from "react";
import SearchBar from "./Components/SearchBar"; 
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import styles from "./Styles/SearchResults.module.css"

const list = [
  {id:0, album:"Master of Puppets", artist:"Metallica", trackName:"Master of Puppets"},
  {id:1, album:"Toxicity", artist:"System of a Down", trackName:"Toxicity"},
  {id:2, album:"Ride the Lightning", artist:"Metallica", trackName:"Ride the Lightning"},
  {id:3, album:"...And Justice for All", artist:"Metallica", trackName:"Blackened"}
]


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("")
  const [playlist, setPlaylist] = useState([])

  const search = useCallback((artist) => {
    list.forEach((track) => {
      if(track.artist === artist){
        setSearchResults(prevTrack => [...prevTrack, track])
      }
    })
  }, [])

  const addToPlaylist = useCallback((track) => {
    if(playlist.some((savedTrack) => savedTrack.id === track.id))
      return;

    setPlaylist(prevTrack => [...prevTrack, track])
  }, [playlist]
  )
  
  const removeFromPlaylist = useCallback((track) => {
    setPlaylist((prevTrack) => 
      prevTrack.filter((currentTrack) => currentTrack.id !== track.id)
    )
  }, [])

  const renamePlaylist = useCallback((name) => {
    setPlaylistName(name)
  },[])

  return (
    <div className="App">
      <h1>Playlist Maker</h1>
      <SearchBar search={search} />
      <div id="result-playlist-container">
        <div className={styles.div}>
          <SearchResults searchResults={searchResults} addTrack={addToPlaylist} />
        </div>
        <div className={styles.div}>
          <Playlist playlistName={playlistName} playlist={playlist} removeTrack={removeFromPlaylist} updatePlaylistName={renamePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
