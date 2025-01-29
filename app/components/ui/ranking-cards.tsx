import styles from "@/styles/ui/ranking-cards.module.css";

export function RankingCards() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<span className={styles.number}>6th</span>
				<p className={styles.description}>Ranked by downloads across all apps on the App Store and Google Play</p>
				<div className={styles.underline} />
			</div>
			<div className={styles.card}>
				<span className={styles.number}>2nd</span>
				<p className={styles.description}>Place for the most downloads among messengers</p>
				<div className={styles.underline} />
			</div>
		</div>
	);
}
