import React from "react";
import TrackList from "./TrackList.js"
import styles from "../Styles/SearchResults.module.css"

function SearchResults(props){
    return(
        <div className={styles.results}>
            <h2>Results</h2>
            <TrackList result={props.searchResults} addTrack={props.addTrack} />
        </div>
    )
}

export default SearchResults;