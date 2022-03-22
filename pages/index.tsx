import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import Benefits from "@/components/Benefits";

export default function riode() {
  return (
    <Applayout>
      <main>
        <HomepageSlider />
        <Benefits />
      </main>
    </Applayout>
  );
}
