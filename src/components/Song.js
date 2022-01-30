import React from "react";

const Song =({currentSong, spinner_class})=>{

    return(
        <div className="song-container">
            <img className={spinner_class} src={currentSong.cover} alt=""></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );

}

export default Song;