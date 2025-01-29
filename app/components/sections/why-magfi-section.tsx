"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Settings, Headphones, Target, Video, Shield, Users, DollarSign, TrendingUp } from "lucide-react";
import { PhoneMockupDark } from "@/components/ui/phone-mockup-dark";
import styles from "@/styles/sections/why-magfi-section.module.css";
import Logo from "@/assets/logo";

const advertiserFeatures = [
	{ icon: Target, title: "Micro-Targeting", description: "Reach your exact audience with precision targeting." },
	{ icon: Video, title: "Pay Per Action", description: "Only pay for the actions that matter to your business." },
	{ icon: Shield, title: "Safest Ad Placement", description: "Your ads are always placed in brand-safe environments." },
];

export function WhyMagfiSection({ activeUserType }: { activeUserType: "publisher" | "advertiser" }) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						{activeUserType === "advertiser" ? (
							<>
								Why <Logo />?
							</>
						) : (
							<>
								Why use <Logo />
								for Advertising?
							</>
						)}
					</h2>
					<div className={styles.titleUnderline} />
				</div>

				<div className={styles.content}>
					<div className={`${styles.leftFeatures} ${styles.rightAligned}`}>
						{advertiserFeatures.slice(0, 3).map((feature, index) => (
							<div key={index} className={styles.featureGroup}>
								<div className={styles.featureContent}>
									<div className={styles.featureText}>{feature.title}</div>
									<p className={styles.featureDescription}>{feature.description}</p>
								</div>
								<div className={styles.iconWrapper}>
									<feature.icon className={styles.icon} />
								</div>
							</div>
						))}
					</div>

					<div className={styles.phoneWrapper}>
						<PhoneMockupDark />
					</div>

					<div className={styles.rightFeatures}>
						{advertiserFeatures.slice(0, 3).map((feature, index) => (
							<div key={index} className={styles.featureGroup}>
								<div className={styles.iconWrapper}>
									<feature.icon className={styles.icon} />
								</div>
								<div className={styles.featureContent}>
									<div className={styles.featureText}>{feature.title}</div>
									<p className={styles.featureDescription}>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
