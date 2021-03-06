import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import Benefits from "@/components/Benefits";
import HomepageCategories from "@/components/Categories/HomepageCategories";
import ShopNowBanner from "@/components/Banners/ShopNowBanner";
import SummerBanner from "@/components/Banners/SummerBanner";
import FeaturedArticles from "@/components/Articles/FeaturedArticles";
import BrandSlider from "@/components/Slider/BrandSlider";
import ProductGrid from "@/components/Product/ProductGrid";
import BestSellers from "@/components/BestSellers";

export default function riode() {
  return (
    <Applayout>
      <main>
        <HomepageSlider />
        <Benefits />
        <HomepageCategories />
        <BestSellers />
        <ShopNowBanner />
        <SummerBanner />
        <FeaturedArticles />
        <BrandSlider />
        <ProductGrid />
      </main>
    </Applayout>
  );
}
