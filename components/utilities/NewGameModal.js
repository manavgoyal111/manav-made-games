import React from "react";
import styles from "../../styles/utilities/NewGameModal.module.css";
import Button from "./Button";

const NewGameModal = ({ setIsOpen, setStartNewGame }) => {
	const handleYes = () => {
		setStartNewGame("Yes");
		setIsOpen(false);
	};

	const handleNo = () => {
		setStartNewGame("No");
		setIsOpen(false);
	};

	return (
		<div className={styles.modal}>
			<div className={styles.modalBG} onClick={() => setIsOpen(false)} />

			<div className={styles.modalCentered}>
				<div className={styles.modalBody}>
					<div className={styles.modalBodyHeader}>
						<h3 className={styles.modalBodyHeaderHeading}>New Game</h3>
					</div>
					<p className={styles.modalBodyContent}>Do you want to start a new game?</p>
					<div className={styles.modalBodyActions}>
						<div className={styles.modalBodyActionsContainer}>
							<div onClick={handleYes}>
								<Button btnName="Yes" />
							</div>
							<div onClick={handleNo}>
								<Button btnName="No" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewGameModal;
