"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/sections/feature-section.module.css";

interface CarouselProps<T> {
	title: string;
	subtitle?: string;
	spanText?: string;
	features: T[];
	children: React.ReactNode;
}

export function Carousel<T>({ title, spanText, children }: CarouselProps<T>) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
		}
	};

	useEffect(() => {
		checkScroll();
		window.addEventListener("resize", checkScroll);
		return () => window.removeEventListener("resize", checkScroll);
	}, []);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 420;
			const currentScroll = scrollContainerRef.current.scrollLeft;
			const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;

			scrollContainerRef.current.scrollTo({
				left: newScroll,
				behavior: "smooth",
			});

			setTimeout(checkScroll, 300);
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<div className={styles.title}>
						{title}
						<br />
						<span>{spanText}</span>
					</div>

					<div className={styles.navigationButtons}>
						<button
							className={`${styles.scrollButton} ${!canScrollLeft ? styles.disabled : ""}`}
							onClick={() => scroll("left")}
							aria-label="Scroll left"
							disabled={!canScrollLeft}
						>
							<ChevronLeft className={styles.scrollIcon} />
						</button>
						<button
							className={`${styles.scrollButton} ${!canScrollRight ? styles.disabled : ""}`}
							onClick={() => scroll("right")}
							aria-label="Scroll right"
							disabled={!canScrollRight}
						>
							<ChevronRight className={styles.scrollIcon} />
						</button>
					</div>
				</div>

				<div className={styles.carouselContainer}>
					<div className={styles.carouselWrapper} ref={scrollContainerRef} onScroll={checkScroll}>
						<div className={styles.featureGrid}>{children}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
