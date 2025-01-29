"use client";

import { Carousel } from "@/components/layout/carousel";
import BrandCard from "../ui/brand-card";
import styles from "@/styles/sections/great-results.module.css";

interface Brand {
	title: string;
	description: string;
	logo?: string;
	bannerLogo?: string;
}

interface GreatResultsSectionProps {
	title: string;
	subtitle?: string;
	brands: Brand[];
}

export function GreatResultsSection({ title, subtitle, brands }: GreatResultsSectionProps) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<Carousel title={title} spanText={subtitle} features={brands}>
					{brands.map((brand, index) => (
						<BrandCard key={index} {...brand} />
					))}
				</Carousel>
			</div>
		</section>
	);
}
