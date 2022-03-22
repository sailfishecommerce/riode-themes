import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/splide/dist/css/splide.min.css";

export default function HomepageSlider() {
  return (
    <Splide>
      <SplideSlide>
        <Image
          src="/slider_1.webp"
          alt="Slider image 1"
          layout="responsive"
          height={450}
          width={1400}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/slider_2.webp"
          alt="Slider image 2"
          layout="responsive"
          height={450}
          width={1400}
        />
      </SplideSlide>
    </Splide>
  );
}
