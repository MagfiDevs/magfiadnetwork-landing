"use client";

import styles from "@/styles/sections/feature-section.module.css";
import { Carousel } from "../layout/carousel";

export interface Feature {
	title: string;
	description: string;
	image?: string;
}

interface FeatureSectionProps {
	title: string;
	subtitle?: string;
	features: Feature[];
}

export function FeatureSection({ title, features }: FeatureSectionProps) {
	return (
		<Carousel title={title} spanText="that generate interest" features={features}>
			{features.map((feature, index) => (
				<div key={index} className={styles.featureCard}>
					<div className={styles.featureContent}>
						<h3 className={styles.featureTitle}>{feature.title}</h3>
						<p className={styles.featureDescription}>{feature.description}</p>
					</div>
					<div className={styles.imageContainer}>
						<img src={feature.image || "/placeholder.svg"} alt={feature.title} className={styles.featureImage} />
					</div>
				</div>
			))}
		</Carousel>
	);
}
