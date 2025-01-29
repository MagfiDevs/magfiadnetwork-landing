import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen">
			<SiteHeader />
			<main>{children}</main>
			<SiteFooter />
		</div>
	);
}
