import './App.css';
import styles from "./Styles/SearchResults.module.css"
import React from "react";
import SearchBar from "./Components/SearchBar"; 
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';

function App() {
  return (
    <div className="App">
      <h1>Playlist Maker</h1>
      <SearchBar />
      <div id="result-playlist-container">
        <div className={styles.div}>
          <SearchResults />
        </div>
        <div className={styles.div}>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
