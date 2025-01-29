import Image from "next/image";
import styles from "@/styles/sections/create-ads-section.module.css";

export function CreateAdsSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.title}>
						{" "}
						<span>Anyone Can</span> Create Ads
					</div>
					<div className={styles.textGrid}>
						<div className={styles.textBlock}>
							<div className={styles.text}>
								All you need to get started is a website link. Let us recommend ad creatives, text and settings to you.
							</div>
							<div className={styles.titleUnderline} />
						</div>
						<div className={styles.textBlock}>
							<div className={styles.text}>
								Our AI-powered platform will analyze your website and target audience to create the perfect ad campaign.
							</div>
							<div className={styles.titleUnderline} />
						</div>
					</div>
				</div>

				<div className={styles.videoContainer}>
					<video autoPlay loop muted playsInline className={styles.video} poster="/placeholder.svg?height=600&width=800">
						<source
							src="https://s3-figma-videos-production-sig.figma.com/video/1186677185185532633/TEAM/45c7/d9a7/-2f13-4a16-ba2a-1c378ba9750a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFLkGdP~ecu~FpIaItAkbY9g3Ic9tsON~4FhN0VT~mv3Pk31Xyl3EPtpoSyu5RUzaygIOvCtxPuZwOHXpCH5nM8cRhf1dRWCNJ6ek4~cXt8jlYT5Zvxwu8GVmMBiLvaTQVUS77F4lVn2TWPBAYpi~JZb4ZSNzA4OV6IeQ2EkOq-VeOFK1vSDwn5VIWh4oKHx2-9s5uDW3OqahCaYYJFOheZzwPgdFlh~rIhcv4~MmEjd8KZza~BIaKj1i-4Ee5NJY-et9HdGMcULU5uAjR-ED8JdBaFTP1qpO1Iz-0yu0jPHgSeFAwp8gMR6ee0Biz152PhwOfil~qXUr21NLumhLg__"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
		</section>
	);
}
