import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPauseCircle,
  FaStepForward,
  FaStepBackward,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import "./MusicPlayer.css";
import cover1 from "./cover/1.jpg";
import music1 from "./music/1.mp3";
import cover2 from "./cover/2.jpg";
import music2 from "./music/2.mp3";
import cover3 from "./cover/3.jpg";
import music3 from "./music/3.mp3";
import cover4 from "./cover/4.jpg";
import music4 from "./music/4.mp3";
import cover5 from "./cover/5.jpg";
import music5 from "./music/5.mp3";
import gif from "./musicgif.gif";

function MusicPlayer() {
  const musicArray = [
    {
      id: 1,
      cover: cover1,
      music: music1,
      name: "I am a Barbie Girl",
    },
    {
      id: 2,
      cover: cover2,
      music: music2,
      name: "Clash Royle Theme Song",
    },
    {
      id: 3,
      cover: cover3,
      music: music3,
      name: "Clash Royle Gameplay",
    },
    {
      id: 4,
      cover: cover4,
      music: music4,
      name: "Doremon Title Song",
    },
    {
      id: 5,
      cover: cover5,
      music: music5,
      name: "Friends Title Song",
    },
  ];

  // Variables
  // const [audioElement, setAudioElement] = useState(new Audio(musicArray[2].music));
  const [currentMusic, setCurrentMusic] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const playingGif = useRef(); // reference the Gif

  // Use Effects
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // Functions
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      playingGif.current.style.setProperty("opacity", "1");
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      playingGif.current.style.setProperty("opacity", "0");
      cancelAnimationFrame(animationRef.current);
    }
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--set-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  const prevMusic = () => {
    if (currentMusic > 0) {
      setCurrentMusic(currentMusic - 1);
    } else {
      setCurrentMusic(4);
    }

    if (isPlaying) {
      togglePlayPause();
    }
    changeRange();
  };

  const nextMusic = () => {
    if (currentMusic < 4) {
      setCurrentMusic(currentMusic + 1);
    } else {
      setCurrentMusic(0);
    }

    if (isPlaying) {
      togglePlayPause();
    }
    changeRange();
  };

  return (
    <div className="musicPlayer">
      <div className="musicContainer">
        {musicArray.map(({ cover, name }) => (
          <div className="musicContainerSongs">
            <img src={cover} alt="cover" height="50px" id="musicContainerSongsCover" />
            <span className="musicContainerSongsText">{name}</span>
          </div>
        ))}
      </div>

      <div className="currentMusicPlayer">
        <audio ref={audioPlayer} src={musicArray[currentMusic].music} preload="metadata"></audio>

        <div className="currentMusicPlayerProgress">
          {/* current time */}
          <div className="currentMusicPlayerTime">{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div>
            <input
              type="range"
              name="range"
              className="currentMusicPlayerProgressBar"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>

          {/* duration */}
          <div className="currentMusicPlayerTime">
            {/* {duration && !isNaN(duration) && calculateTime(duration)} */}
            {isNaN(duration) ? "0:00" : calculateTime(duration)}
          </div>
        </div>

        {/* Buttons */}
        <div className="currentMusicPlayerBtn">
          <button className="currentMusicPlayerIcons">
            <FaStepBackward onClick={prevMusic} />
          </button>
          <button className="currentMusicPlayerIcons">
            <FaArrowLeft className="currentMusicPlayerBtnArrow" onClick={backThirty} /> 30
          </button>

          {/* Play / Pause */}
          <button className="currentMusicPlayerIcons" onClick={togglePlayPause}>
            {isPlaying ? <FaPauseCircle /> : <FaPlay />}
          </button>
          <button className="currentMusicPlayerIcons">
            30 <FaArrowRight className="currentMusicPlayerBtnArrow" onClick={forwardThirty} />
          </button>
          <button className="currentMusicPlayerIcons">
            <FaStepForward onClick={nextMusic} />
          </button>
          <img src={gif} alt="playing" id="currentMusicPlayerGif" ref={playingGif} />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
