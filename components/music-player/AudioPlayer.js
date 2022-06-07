import Image from "next/image";
import styles from "../../styles/music-player/AudioPlayer.module.css";
import { MusicData } from "./MusicData";

const AudioPlayer = () => {
	return (
		<div className={styles.audioPlayer}>
			{MusicData.map(({ cover, name }, idx) => (
				<div key={idx} className={styles.audioPlayerSongs}>
					<Image
						src={cover}
						alt="Cover"
						height={50}
						width={50}
						className={styles.audioPlayerSongsCover}
					/>
					<span className={styles.audioPlayerSongsText}>{name}</span>
				</div>
			))}
		</div>
	);
};

export default AudioPlayer;
