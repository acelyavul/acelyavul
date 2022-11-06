import styles from "./Hero.module.css";
import * as Icon from "../assets/Icon";

export default function Blog() {
	return (
		<section className={styles.section}>
			<div className={`animation-fadeIn ${styles.textStyle}`}>
				<div className='alignCenter'>
					<Icon.ComingSoon size={60} />
				</div>
			</div>
		</section>
	);
}
