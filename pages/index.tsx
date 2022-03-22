import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import Benefits from "@/components/Benefits";
import HomepageCategories from "@/components/Categories/HomepageCategories";

export default function riode() {
  return (
    <Applayout>
      <main>
        <HomepageSlider />
        <Benefits />
        <HomepageCategories />
      </main>
    </Applayout>
  );
}
