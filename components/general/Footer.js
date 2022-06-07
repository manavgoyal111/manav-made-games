import { FaUserAlt, FaGithub } from "react-icons/fa";
import styles from "../../styles/general/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInfo}>
				<div>
					<a href="https://manav.vercel.app/" target="_blank" rel="noreferrer">
						Manav Goyal
					</a>
				</div>
				<span className={styles.footerLine}></span>
				<div>Copyright © 2022</div>
			</div>

			<div className={styles.footerLinks}>
				<div>
					<a
						href="mailto:manav.goyal.dev@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<div className={styles.footerLinksIcon}>
							<FaUserAlt />
						</div>
					</a>
				</div>
				<div>
					<a
						href="https://github.com/manavgoyal111"
						target="_blank"
						rel="noreferrer"
					>
						<div className={styles.footerLinksIcon}>
							<FaGithub />
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
