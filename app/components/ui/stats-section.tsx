import styles from "@/styles/ui/stats-section.module.css";

export function StatsSection() {
	return (
		<div className={styles.container}>
			<div className={styles.mainStats}>
				<div>
					<div className={styles.statNumber}>950 million</div>
					<p className={styles.statLabel}>Users worldwide</p>
				</div>
				<div>
					<div className={styles.statNumber}>490 million</div>
					<p className={styles.statLabel}>Daily active users (DAU)</p>
				</div>
				<div>
					<div className={styles.statNumber}>2,5 million</div>
					<p className={styles.statLabel}>New registrations each day</p>
				</div>
			</div>

			<div className={styles.bottomCards}>
				<div className={styles.iconCard}>
					<div className={styles.iconContainer}>
						<svg className={styles.icon} viewBox="0 0 24 24" fill="none">
							<path
								d="M19.5 5.25H4.5A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25ZM12 15.75h7.5m-7.5 0a2.25 2.25 0 0 1 0-4.5m0 4.5a2.25 2.25 0 0 0 0-4.5m-7.5 0h7.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className={styles.iconCardContent}>
						<div className={styles.iconCardNumber}>58</div>
						<p className={styles.iconCardLabel}>Languages</p>
					</div>
				</div>
				<div className={styles.iconCard}>
					<div className={styles.iconContainer}>
						<svg className={styles.icon} viewBox="0 0 24 24" fill="none">
							<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path
								d="M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a9 9 0 0 1 9 9M12 3a9 9 0 0 0-9 9"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className={styles.iconCardContent}>
						<div className={styles.iconCardNumber}>155</div>
						<p className={styles.iconCardLabel}>Countries</p>
					</div>
				</div>
			</div>
		</div>
	);
}
