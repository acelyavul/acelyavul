import styles from "./Projects.module.css";
import { projects } from "../data/projects";
import * as Icon from "../assets/Icon";
import * as Utils from "../utils";

export default function Projects() {
	return (
		<section className={`animation-fadeIn ${styles.section}`}>
			{projects.map(project => (
				<div key={project.id} className={styles.displayInline}>
					<figure className={styles.projectContainerStyle}>
						<div className={styles.containerStyle}>
							<Icon.Diagram className={styles.iconStyle} />
							<p className={styles.titleStyle}>{project.name}</p>

							<div className={styles.link}>
								{project.code && (
									<a
										href={project.code}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={project.name}
									>
										<Icon.Code className={styles.iconStyle} />
									</a>
								)}

								<a
									href={project.website_link}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={project.name}
								>
									<Icon.ExternalLink className={styles.iconStyle} />
								</a>
							</div>
						</div>

						<div className={styles.imageContainerStyle}>
							<img
								src={project.image_url}
								className={styles.imageStyle}
								alt={project.name}
								loading='lazy'
							/>
						</div>

						<div className={styles.contentContainerStyle}>
							<h4 className={styles.subtitleStyle}>About</h4>
							<p className={styles.textStyle}>{project.description}</p>
						</div>

						<div className={styles.contentContainerStyle}>
							<h4 className={styles.subtitleStyle}>Technology</h4>
							<div className={styles.tagContainerStyle}>
								{project.tags.map((tag, idx) => {
									const backgroundColor = Utils.getDarkColor();
									return (
										<span
											key={idx}
											className={styles.tagStyle}
											style={{
												backgroundColor: backgroundColor,
											}}
										>
											{tag}
										</span>
									);
								})}
							</div>
						</div>
					</figure>
				</div>
			))}
		</section>
	);
}
