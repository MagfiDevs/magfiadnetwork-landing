"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/sections/hero-section.module.css";

type UserType = "publisher" | "advertiser";

interface HeroSectionProps {
	onUserTypeChange: (userType: UserType) => void;
}

export function HeroSection({ onUserTypeChange }: HeroSectionProps) {
	const [activeTab, setActiveTab] = useState<UserType>("advertiser");

	const handleTabChange = (userType: UserType) => {
		setActiveTab(userType);
		onUserTypeChange(userType);
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.toggleWrapper}>
					<div className={styles.toggleContainer}>
						<button
							onClick={() => handleTabChange("advertiser")}
							className={`${styles.toggleButton} ${activeTab === "advertiser" ? styles.toggleButtonActive : styles.toggleButtonInactive}`}
						>
							For Advertisers
						</button>
						<button
							onClick={() => handleTabChange("publisher")}
							className={`${styles.toggleButton} ${activeTab === "publisher" ? styles.toggleButtonActive : styles.toggleButtonInactive}`}
						>
							For Publishers
						</button>
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.title}>
						{activeTab === "publisher" ? (
							<>
								Best way to monetize your{" "}
								<span className={styles.titleWrapper}>
									<Image
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-zST7kwkw5plCeg4JvuiTonyH2bT8aI.svg"
										alt="Telegram"
										width={48}
										height={48}
										className={styles.telegramLogo}
									/>
									<span className={styles.gradientText}>Telegram</span>
								</span>{" "}
								Community
							</>
						) : (
							<>
								Announce your campaign <br />
								<div className={styles.dynamicLine}>
									<span className={styles.staticText}>
										<span className={styles.titleWrapper}>
											on{"  "}
											<Image
												src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-zST7kwkw5plCeg4JvuiTonyH2bT8aI.svg"
												alt="Telegram"
												width={56}
												height={56}
												className={styles.telegramLogo}
											/>
											<span className={styles.gradientText}>Telegram</span>
										</span>
									</span>
									<span className={styles.dynamicText}>
										<span className={`${styles.word} ${styles.word1}`}>Community</span>
										<span className={`${styles.word} ${styles.word2}`}>Game</span>
										<span className={`${styles.word} ${styles.word3}`}>App</span>
									</span>
								</div>
							</>
						)}
					</div>

					<p className={styles.description}>
						{activeTab === "publisher"
							? "Transform your Telegram channel into a profit hub and let your content earn while you create!"
							: "Reach your ideal audience on Telegram today and experience the unmatched power of effective, targeted advertising!"}
					</p>

					<button className={styles.button}>Get Started</button>
				</div>
			</div>
		</section>
	);
}
