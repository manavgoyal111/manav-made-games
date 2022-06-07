import { useState, useRef, useEffect } from "react";

const useAudioPlayer = () => {
	// State Variables
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// References
	const audioPlayer = useRef(); // Reference to audio component
	const progressBar = useRef(); // Reference to progress bar
	const animationRef = useRef(); // Reference to animation

	// Use Effects
	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	useEffect(() => {
		if (Number(duration) > 0 && Number(currentTime) === Number(duration)) {
			togglePlayPause();
			progressBar.current.value = 0;
			changeRange();
		}
	}, [currentTime]);

	// Functions
	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);

		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
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

	const backThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) - 30;
		changeRange();
	};

	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) + 30;
		changeRange();
	};

	return {
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
	};
};

export { useAudioPlayer };
