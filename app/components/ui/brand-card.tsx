import Image from "next/image";
import styles from "@/styles/ui/brand-card.module.css";

interface BrandCardProps {
	title?: string;
	description?: string;
	logo?: string;
	bannerLogo?: string;
}

export default function BrandCard({
	title = "FINANCE",
	description = "Leading food delivery app, Yemeksepeti finds profitable scale in a crowded market with AppDiscovery.",
	logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bvh0LYvjCoyHMOOYde96Zh00HXRGzC.png",
	bannerLogo = "https://s3-alpha-sig.figma.com/img/7390/e96e/4bbb5306e3de0f5ac352dbe92afba811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3CbPisjaZnLxxhW~siQIPgyTZZDi0ci00FT1KLuMJ3gzTWMNRvglYcRqafyVN1oWhpGfI6RS2It0dwS6~N0isMCOgdf3wNscGNHeowiOUs13H3pMnHTml0EhGTMEmHNT2AArbEXxHF4OQJp-H8nABDtoSkFOxBW6~pXA0fDwVNwxq3SvU9ruRL5nbFq0tIj4wi0D9a3IBRsPG1p3xfHV-rXvCRQXvjGCVqarXauVJwaXa40pOWTL3uZxOKhKc5zKmPv-IbQnf2Hw-~NSfzejRk82D-aLLeF3Z39IUUTPHuLcrWhvTLnTD3MeZ4qInq~XTT9QT9v6PNE48sYIRicmw__",
}: BrandCardProps) {
	return (
		<div className={styles.section}>
			<div className={styles.card}>
				<div className={styles.cardContent}>
					<div className={styles.title}>{title}</div>
					<div className={styles.line}></div>
					<div className={styles.content}>
						<Image src={logo} alt="Brand Logo" width={96} height={17} className={styles.logo} />
						<div className={styles.description}>{description}</div>
					</div>
				</div>
				<div className={styles.bannerLogoContainer}>
					<Image src={bannerLogo} alt="Brand Banner Logo" width={280} height={160} className={styles.bannerLogo} />
				</div>
			</div>
		</div>
	);
}
