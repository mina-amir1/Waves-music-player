import React from "react";

const LibrarySong =({ song,  setCurrentSong,  audioRef,isPlaying,songs,  setSongs})=>{

    const selectSong= async()=>{

        setSongs(songs.map(s=>{
            if(s.id ===song.id){
                return{
                    ...s,
                    active:true
                }
            }
            else{
            return{
                ...s,
                active:false
            }}
        }));
       await setCurrentSong(song);
        if(isPlaying) audioRef.current.play();
    }
    return(
        <div onClick={selectSong} className={`library-song ${song.active ? "selected": ""}`}>
                <img src={song.cover} alt=""></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
                </div>
        </div>
    );

}

export default LibrarySong;