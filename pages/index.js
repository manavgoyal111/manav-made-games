import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../styles/home/Home.module.css";
import { capitalise } from "../components/utilities/Capitalise";
import { GamesData } from "../components/home/GameData";

const Home = () => {
	const [sliderIndex, setSliderIndex] = useState();

	const sliderRef = useRef();
	const sliderCountRef = useRef(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			sliderCountRef.current = Math.ceil(
				GamesData.length /
					parseInt(
						getComputedStyle(sliderRef.current).getPropertyValue("--items-per-screen")
					)
			);

			setSliderIndex(
				parseInt(getComputedStyle(sliderRef.current).getPropertyValue("--slider-index"))
			);
		}
	}, [sliderCountRef]);

	const slideGamesLeft = () => {
		setSliderIndex(
			parseInt(getComputedStyle(sliderRef.current).getPropertyValue("--slider-index"))
		);
		if (sliderIndex - 1 <= 0) {
			sliderRef.current.style.setProperty("--slider-index", sliderCountRef.current - 1);
		} else {
			sliderRef.current.style.setProperty("--slider-index", sliderIndex - 1);
		}
	};

	const slideGamesRight = () => {
		setSliderIndex(
			parseInt(getComputedStyle(sliderRef.current).getPropertyValue("--slider-index"))
		);
		if (sliderIndex + 1 >= sliderCountRef.current) {
			sliderRef.current.style.setProperty("--slider-index", 0);
		} else {
			sliderRef.current.style.setProperty("--slider-index", sliderIndex + 1);
		}
	};

	console.log("Slider Index", sliderIndex);
	console.log("Slider Count", sliderCountRef.current);

	return (
		<div className={styles.home}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<div className={styles.homeHeader}>
				<h2>Games</h2>
				<div className={styles.homeHeaderProgress}>
					{[...Array(sliderCountRef.current)].map((x, idx) => (
						<div
							className={`${styles.homeHeaderProgressItem} ${
								idx === sliderIndex + 1 ? styles.active : ""
							}`}
							key={idx}
						></div>
					))}
				</div>
			</div>

			<div className={styles.homeSlider}>
				<button
					className={`${styles.homeSliderHandle} ${styles.homeSliderHandleLeft}`}
					onClick={slideGamesLeft}
				>
					<div className={styles.homeSliderHandleText}>
						<IoIosArrowBack />
					</div>
				</button>
				<div className={styles.homeSliderGames} ref={sliderRef}>
					{GamesData.map((game, idx) => (
						<div className={styles.homeSliderGamesItem} key={idx}>
							<Link href={`/${game.slug}`}>
								<a>
									<Image
										src={game.url}
										alt="Game"
										height={250}
										width={250}
										layout="fixed"
									/>
									<h2>{capitalise(game.slug)}</h2>
								</a>
							</Link>
						</div>
					))}
				</div>
				<button
					className={`${styles.homeSliderHandle} ${styles.homeSliderHandleRight}`}
					onClick={slideGamesRight}
				>
					<div className={styles.homeSliderHandleText}>
						<IoIosArrowForward />
					</div>
				</button>
			</div>
		</div>
	);
};

export default Home;
