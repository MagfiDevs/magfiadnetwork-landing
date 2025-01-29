import styles from "@/styles/ui/phone-mockup-dark.module.css";

export function PhoneMockupDark() {
	return (
		<div className={styles.phoneContainer}>
			<div className={styles.screen}>
				<div className={styles.notchContainer}>
					<div className={styles.notch}>
						<div className={styles.camera} />
						<div className={styles.speaker} />
					</div>
				</div>
				<div className={styles.homeIndicator} />
			</div>
		</div>
	);
}
