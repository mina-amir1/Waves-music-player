import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';

const Player =({songs,setSongs, setSongInfo, SongInfo, setCurrentSong, currentSong, isPlaying, setisPlaying, setspinner_class,  audioRef})=>{

    const PlaySongHandler=()=>{
        if(isPlaying===false){
        audioRef.current.play();
        setisPlaying(true);
        setspinner_class("img-spinner-play");
        }
        else{
            audioRef.current.pause();
            setisPlaying(false);
            setspinner_class("img-spinner-play pause");
        }
    }
    const dragHandler=(e)=>{
        audioRef.current.currentTime= e.target.value;
    }
    const getTime=(time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const ActiveLibraryHandler=(nextPrev)=>{
        setSongs(songs.map(s=>{
            if(s.id === nextPrev.id){
            return{
                ...s,
                active: true
            }
            }
                return{
                    ...s,
                    active:false
                }
        }));
    }
    const skipTrackHandler= async (direction)=>{
        const currentIndex = songs.findIndex((s)=> s.id === currentSong.id );
        if(direction === 'skip-forward'){
        await setCurrentSong(songs[(currentIndex+1) % songs.length]);
        ActiveLibraryHandler(songs[(currentIndex+1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if( currentIndex === 0){
               await setCurrentSong(songs[songs.length-1]);
               ActiveLibraryHandler(songs[songs.length-1]);
            }
            else{
            await setCurrentSong(songs[(currentIndex-1) % songs.length]);
            ActiveLibraryHandler(songs[(currentIndex-1) % songs.length]);}
        }
        if(isPlaying) audioRef.current.play();
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(SongInfo.currentTime)}</p>
                <input type="range" onChange={dragHandler} min={0} max={SongInfo.duration || 0} value={SongInfo.currentTime} />
                <p>{SongInfo.duration ? getTime(SongInfo.duration):"00:00"}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon className="play" size="2x" icon={isPlaying ? faPause : faPlay} onClick={PlaySongHandler}/>
            <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    );

}

export default Player;