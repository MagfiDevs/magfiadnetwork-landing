"use client";

import Image from "next/image";
import Link from "next/link";
import { TextIcon as Telegram, Twitter, Linkedin } from "lucide-react";
import styles from "@/styles/components/site-footer.module.css";

export function SiteFooter() {
	return (
		<footer className={`${styles.footer} bg-[#F9FAFB]`}>
			<div className={styles.subscribeCard}>
				<div className={styles.subscribeContent}>
					<h2 className={styles.subscribeTitle}>Subscribe</h2>
					<p className={styles.subscribeText}>Join our community to receive updates.</p>
				</div>
				<div className={styles.subscribeForm}>
					<input type="email" placeholder="Enter your email" className={styles.input} />
					<button className={styles.subscribeButton}>
						<div className={styles.subscribeButtonText}>Subscribe</div>
					</button>
				</div>

				<p className={styles.privacyNotice}>
					By subscribing, you agree to our{" "}
					<Link href="/privacy-policy" className={styles.link}>
						Privacy Policy
					</Link>
					.
				</p>
			</div>

			<div className={styles.footerContent}>
				<div className={styles.footerMain}>
					<Link href="/" className={styles.logo}>
						<Image
							src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/View=Footer-6oJFtswRggxYtXMC5IMN1JpvvpAcKr.png"
							alt="MagfiADS Logo"
							width={120}
							height={32}
							className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
						/>
					</Link>

					<div className={styles.socialLinks}>
						<Link href="https://t.me/magfiads" className={styles.socialLink}>
							<Telegram className={styles.socialIcon} />
						</Link>
						<Link href="https://twitter.com/magfiads" className={styles.socialLink}>
							<Twitter className={styles.socialIcon} />
						</Link>
						<Link href="https://linkedin.com/company/magfiads" className={styles.socialLink}>
							<Linkedin className={styles.socialIcon} />
						</Link>
					</div>
				</div>

				<div className={styles.footerBottom} style={{ borderTop: "1px solid #E4E7EC", paddingTop: "40px" }}>
					<div className={styles.legalLinks}>
						<Link href="/privacy-policy" className={styles.legalLink}>
							Privacy Policy
						</Link>
						<Link href="/terms" className={styles.legalLink}>
							Terms of Service
						</Link>
						<Link href="/cookies" className={styles.legalLink}>
							Cookie Policy
						</Link>
					</div>

					<div className={styles.copyright}>© 2025 Magfi Ads. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}
