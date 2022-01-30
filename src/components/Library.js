import React from "react";
import LibrarySong from "./LibrarySong";

const Library =({ songs, setCurrentSong,libraryStatus, audioRef, isPlaying,setSongs})=>{

    return(
        <div className={`library ${libraryStatus ? "active-library": ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
               {songs.map(song=>
               <LibrarySong  isPlaying={isPlaying} songs={songs} setSongs={setSongs} audioRef={audioRef} setCurrentSong={setCurrentSong} song={song}/>) }
            </div>
        </div>
    );
}

export default Library;