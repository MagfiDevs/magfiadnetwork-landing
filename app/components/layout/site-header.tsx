import Link from "next/link";
import styles from "@/styles/components/site-header.module.css";
import Logo from "@/assets/logo";

export function SiteHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					<Logo />
				</Link>
				<nav className={styles.nav}>
					<Link href="/about" className={styles.navLink}>
						About
					</Link>
					<Link href="/for-business" className={styles.navLink}>
						For business
					</Link>
					<Link href="/media" className={styles.navLink}>
						Media
					</Link>
					<Link href="/blog" className={styles.navLink}>
						Blog
					</Link>
				</nav>
				<button className={styles.button}>
					<Link href="/get-started" className={styles.buttonText}>
						Get Started
					</Link>
				</button>
			</div>
		</header>
	);
}

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}
