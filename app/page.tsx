"use client";

import "@magfiads/design-tokens/variables.css";
import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyTelegramSection } from "@/components/sections/why-telegram-section";
import { WhyMagfiSection } from "@/components/sections/why-magfi-section";
import { AdvertiserContent } from "@/components/sections/advertiser-content";
import styles from "@/styles/page/main.module.css";
export default function LandingPage() {
	const [userType, setUserType] = useState<"publisher" | "advertiser">("advertiser");

	const handleUserTypeChange = (newUserType: "publisher" | "advertiser") => {
		setUserType(newUserType);
	};

	return (
		<Layout>
			<div className={styles.fullPage}>
				<div className={styles.landingPage}>
					<HeroSection onUserTypeChange={handleUserTypeChange} />
					<WhyTelegramSection />
					<WhyMagfiSection activeUserType={userType} />
					{userType === "publisher" ? <AdvertiserContent /> : <AdvertiserContent />}
				</div>
			</div>
		</Layout>
	);
}
