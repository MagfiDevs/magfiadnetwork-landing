import styles from "@/styles/ui/phone-mockup.module.css";

export function PhoneMockup() {
	return (
		<div className={styles.phoneContainer}>
			<div className={styles.videoWrapper}>
				<video autoPlay loop muted playsInline className={styles.video}>
					<source
						src="https://s3-figma-videos-production-sig.figma.com/video/1186677185185532633/TEAM/93fa/72b4/-f278-4a7d-b8a1-c2505bbaba24?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFImbsArNy2LzpKnII8l-43IXyhP~qdrIebIU6Bk5qA6~6Io9EgMA-AXWbUptRcZL0kj-Q-AwSDzAdJ3J2aXUxCBPF5CZ276~et1Pu2ugNPi9s9fsu~-G-b0WlLl2wYV3v1cnO9L9tl8GFN5rR0al8BplgGef~o~xB2F7-2QTQ5nevk1KsjVBLxZMatW7S-hrTkI4qhgXwBeG0500sXRcPGiKO9W92v60X5IXAGrOcWxRaQVlAUswzgJ70E4VBmZ-Q-yrWHVrYg1P~yNvuccaT2Hhp4cUgWDtLJy7j9-A6usJ4Z8m05ztYPdtaTv5HOyKKOiz62jHi~xXPOICVOiNw__"
						type="video/mp4"
					/>
				</video>
				<div className={styles.overlay} />
			</div>
		</div>
	);
}
