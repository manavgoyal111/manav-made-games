import React from "react";
import {
	FaRegCopyright,
	FaUserAlt,
	FaGithub,
	FaLinkedinIn,
} from "react-icons/fa";
import styles from "../../styles/general/Footer.module.css";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerSocial}>
				<li className={styles.footerSocialItem}>
					<a href="manavgoyal.me" target="_blank">
						<div className={styles.footerSocialItemIcon}>
							<FaRegCopyright />
						</div>{" "}
						Manav Goyal
					</a>
				</li>
				<li className={styles.footerSocialItem}>
					<a
						href="mailto:manavgoyaltheboss@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<div className={styles.footerSocialItemIcon}>
							<FaUserAlt />
						</div>{" "}
						manavgoyaltheboss@gmail.com
					</a>
				</li>
				<li className={styles.footerSocialItem}>
					<a
						href="https://www.linkedin.com/in/manav-goyal"
						target="_blank"
						rel="noreferrer"
					>
						<div className={styles.footerSocialItemIcon}>
							<FaLinkedinIn />
						</div>{" "}
						LinkedIn
					</a>
				</li>
				<li className={styles.footerSocialItem}>
					<a
						href="https://github.com/manavgoyal111"
						target="_blank"
						rel="noreferrer"
					>
						<div className={styles.footerSocialItemIcon}>
							<FaGithub />
						</div>{" "}
						GitHub
					</a>
				</li>
			</div>
		</div>
	);
}

export default Footer;
