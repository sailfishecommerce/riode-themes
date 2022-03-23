import shopNowBannerContent from "@/json/shop-now-banner.json";
import ShopNowBannerItem from "@/components/Banners/ShopNowBannerItem";

export default function ShopNowBanner() {
  return (
    <div className="flex items-center container mx-auto my-10">
      {shopNowBannerContent.map((content, index) => (
        <ShopNowBannerItem content={content} key={index} index={index} />
      ))}
    </div>
  );
}
