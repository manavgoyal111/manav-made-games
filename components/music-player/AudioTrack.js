import React, { useState, useRef } from "react";
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
import { useAudioPlayer } from "./AudioHook";
import { MusicData } from "./MusicData";

const MusicPlayer = () => {
	// Temp
	// const [audioElement, setAudioElement] = useState(
	// 	MusicData[0].music
	// 	new Audio(MusicData[0].music)
	// );
	const [currentMusic, setCurrentMusic] = useState(0);
	const playingGif = useRef(); // Reference to Gif

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

	// AudioHook
	const {
		isPlaying,
		duration,
		currentTime,
		audioPlayer,
		progressBar,
		calculateTime,
		togglePlayPause,
		changeRange,
		backThirty,
		forwardThirty,
	} = useAudioPlayer();

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
					{isNaN(duration) ? "00:00" : calculateTime(duration)}
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
						<FaPauseCircle size={25} className={styles.audioTrackButtonArrow} />
					) : (
						<FaPlay size={25} className={styles.audioTrackButtonArrow} />
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
