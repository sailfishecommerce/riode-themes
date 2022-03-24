import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import Benefits from "@/components/Benefits";
import HomepageCategories from "@/components/Categories/HomepageCategories";
import ShopNowBanner from "@/components/Banners/ShopNowBanner";
import SummerBanner from "@/components/Banners/SummerBanner";
import FeaturedArticles from "@/components/Articles/FeaturedArticles";
import BrandSlider from "@/components/Slider/BrandSlider";

export default function riode() {
  return (
    <Applayout>
      <main>
        <HomepageSlider />
        <Benefits />
        <HomepageCategories />
        <ShopNowBanner />
        <SummerBanner />
        <FeaturedArticles />
        <BrandSlider />
      </main>
    </Applayout>
  );
}
