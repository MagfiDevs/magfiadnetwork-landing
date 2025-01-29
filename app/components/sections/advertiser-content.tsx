import { FeatureSection } from "@/components/sections/feature-section";
import { CreateAdsSection } from "@/components/sections/create-ads-section";
import { GreatResultsSection } from "@/components/sections/great-results-section";
import Feature from "@/assets/content/feature.json";
import Brands from "@/assets/content/brands.json";
export function AdvertiserContent() {
	return (
		<>
			<FeatureSection title="What is AppDiscovery?" features={Feature} />
			<CreateAdsSection />
			<GreatResultsSection title="Check out businesses that are getting great results with Magfi Ads." brands={Brands} />
		</>
	);
}
