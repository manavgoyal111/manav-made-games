import Head from "next/head";
import styles from "../styles/music-player/MusicPlayer.module.css";
import AudioPlayer from "../components/music-player/AudioPlayer";
import AudioTrack from "../components/music-player/AudioTrack";

const MusicPlayer = () => {
	return (
		<div className={styles.musicPlayer}>
			<Head>
				<title>Music Player | MMG</title>
			</Head>

			<AudioPlayer />

			<AudioTrack />
		</div>
	);
};

export default MusicPlayer;
