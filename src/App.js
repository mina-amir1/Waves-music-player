import React,{useState,useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import './styles/app.scss';
import data from './data';
import { library } from "@fortawesome/fontawesome-svg-core";
import Nav from "./components/Nav";

function App() {
  const audioRef =useRef(null);
  const [songs, setSongs]=useState(data());
  const [currentSong, setCurrentSong]= useState(songs[1]);
  const [isPlaying, setisPlaying]= useState(false);
  const [spinner_class, setspinner_class]=useState("");
  const [SongInfo, setSongInfo]= useState({
    currentTime: 0,
    duration: 0
});
  const [ libraryStatus, setlibraryStatus]= useState(false);
  const timeUpdateHandler=(e)=>{
  setSongInfo({currentTime: e.target.currentTime, duration: e.target.duration});
  }
  const SongEndHandler=async()=>{
    const currentIndex = songs.findIndex(s=> s.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }
  return (
    <div className={`App ${libraryStatus? 'library-active' : ""}`}>
      <Nav
            libraryStatus={libraryStatus}
            setlibraryStatus={setlibraryStatus} />
      <Song
            currentSong={currentSong}
            spinner_class={spinner_class}
            />
      <Player
            setSongs={setSongs}
            SongInfo={SongInfo}
            setSongInfo={setSongInfo}
              audioRef={audioRef}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
              songs={songs}
              isPlaying={isPlaying}
              setisPlaying={setisPlaying}
              setspinner_class={setspinner_class}
              />
      <Library libraryStatus={libraryStatus} songs={songs} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef}  setCurrentSong={setCurrentSong} />
      <audio
      onEnded={SongEndHandler}
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio} />
    </div>
  );
}

export default App;
