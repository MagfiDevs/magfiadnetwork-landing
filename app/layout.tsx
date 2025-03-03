import "@/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
	title: "MagfiADS",
	description: "Telegram Advertising Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
