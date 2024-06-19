import React from "react";
import TrackList from "./TrackList.js"

function SearchResults(props){
    return(
        <div>
            <h1>Results:</h1>
            <TrackList result={props.searchResults} />
        </div>
    )
}

export default SearchResults;