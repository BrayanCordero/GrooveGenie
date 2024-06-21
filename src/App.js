import './App.css';
import React, { useCallback, useState } from "react";
import SearchBar from "./Components/SearchBar"; 
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Spotify from "./Util/Spotify"



function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("")
  const [playlist, setPlaylist] = useState([])


  const search = useCallback((artist) => {
    // checks to not add duplicate tracks of the same artist to the results component
    // if(searchResults.some(saveResults => saveResults.artist === artist))
    //   return;

    Spotify.search(artist).then(setSearchResults)

  }, [])

  const addToPlaylist = useCallback((track) => {
    // checks to not add duplicate tracks 
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

  const saveToSpotify = useCallback(() => {
    const trackUris = playlist.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackUris).then(() =>{
      setPlaylistName("New Playlist")
      setPlaylist([])
    })
  }, [playlistName, playlist])

  return (
    <div className="App">
      <h1>GrooveGenie</h1>
      <SearchBar search={search} />
      <div id='container'>
          <SearchResults searchResults={searchResults} addTrack={addToPlaylist} />
          <Playlist playlistName={playlistName} playlist={playlist} removeTrack={removeFromPlaylist} updatePlaylistName={renamePlaylist} savePlaylist={saveToSpotify} />
      </div>
    </div>
  );
}

export default App;
