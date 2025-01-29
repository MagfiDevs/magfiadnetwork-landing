import { PhoneMockup } from "@/components/ui/phone-mockup";
import { StatsSection } from "@/components/ui/stats-section";
import { RankingCards } from "@/components/ui/ranking-cards";
import styles from "@/styles/sections/why-telegram-section.module.css";

export function WhyTelegramSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.title}>
						Why <span className={styles.titleGradient}>Telegram?</span>
						<div className={styles.titleUnderline} />
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.phoneWrapper}>
						<PhoneMockup />
					</div>
					<div className={styles.statsWrapper}>
						<RankingCards />
						<StatsSection />
					</div>
				</div>
			</div>
		</section>
	);
}
