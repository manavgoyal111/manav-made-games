import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
	FaPlay,
	FaPauseCircle,
	FaStepForward,
	FaStepBackward,
	FaArrowRight,
	FaArrowLeft,
} from "react-icons/fa";
import styles from "../../styles/music-player/AudioTrack.module.css";
import { MusicData } from "./MusicData";

const MusicPlayer = () => {
	// Variables
	const [audioElement, setAudioElement] = useState(
		MusicData[0].music
		// new Audio(MusicData[0].music)
	);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentMusic, setCurrentMusic] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation
	const playingGif = useRef(); // reference the Gif

	// Use Effects
	// useEffect(() => {
	// 	const seconds = Math.floor(audioPlayer.current.duration);
	// 	setDuration(seconds);
	// 	progressBar.current.max = seconds;
	// }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	// // Functions
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
		<div className={styles.audioTrack}>
			<audio
				ref={audioPlayer}
				src={MusicData[currentMusic].music}
				preload="metadata"
			></audio>

			{/* Progress Track */}
			<div className={styles.audioTrackProgress}>
				{/* Current Time */}
				<div className={styles.audioTrackTime}>
					{calculateTime(currentTime)}
				</div>

				{/* progress bar */}
				<div>
					<input
						type="range"
						name="range"
						className={styles.audioTrackProgressBar}
						defaultValue="0"
						ref={progressBar}
						onChange={changeRange}
					/>
				</div>

				{/* Total Duration */}
				<div className={styles.audioTrackTime}>
					{/* {duration && !isNaN(duration) && calculateTime(duration)} */}
					{isNaN(duration) ? "0:00" : calculateTime(duration)}
				</div>
			</div>

			{/* Buttons */}
			<div className={styles.audioTrackButton}>
				<button onClick={prevMusic}>
					<FaStepBackward className={styles.audioTrackButtonArrow} />
				</button>

				<button onClick={backThirty}>
					<FaArrowLeft className={styles.audioTrackButtonArrow} />
					<span>30</span>
				</button>

				{/* Play / Pause */}
				<button onClick={togglePlayPause}>
					{isPlaying ? (
						<FaPauseCircle className={styles.audioTrackButtonArrow} />
					) : (
						<FaPlay className={styles.audioTrackButtonArrow} />
					)}
				</button>

				<button onClick={forwardThirty}>
					<span>30</span>{" "}
					<FaArrowRight className={styles.audioTrackButtonArrow} />
				</button>

				<button onClick={nextMusic}>
					<FaStepForward className={styles.audioTrackButtonArrow} />
				</button>

				<Image
					src="https://ik.imagekit.io/manav11goyal11/mmg/music-player/playing.gif"
					alt="Playing"
					className={styles.audioTrackGif}
					height={50}
					width={50}
					ref={playingGif}
				/>
			</div>
		</div>
	);
};

export default MusicPlayer;
