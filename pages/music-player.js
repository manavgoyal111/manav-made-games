import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/music-player/MusicPlayer.module.css";
import { MusicData } from "../components/music-player/MusicData";

function MusicPlayer() {
	return (
		<div className={styles.player}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<div className={styles.musicContainer}>
				{MusicData.map(({ cover, name }) => (
					<div key={cover} className={styles.musicContainerSongs}>
						{/* <img
							src={cover}
							alt="cover"
							height="50px"
							id="musicContainerSongsCover"
						/> */}
						<span className={styles.musicContainerSongsText}>{name}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default MusicPlayer;
