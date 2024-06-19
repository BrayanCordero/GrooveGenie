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
  // const search = useCallback((term) => {
  //   setSearchResults(term)
  // })
  return (
    <div className="App">
      <h1>Playlist Maker</h1>
      <SearchBar />
      <div id="result-playlist-container">
        <div className={styles.div}>
          <SearchResults searchResults={searchResults}/>
        </div>
        <div className={styles.div}>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
