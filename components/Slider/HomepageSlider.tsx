import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/splide/dist/css/splide.min.css";
import sliderContent from "@/json/slider.json";

export default function HomepageSlider() {
  return (
    <Splide>
      {sliderContent.map((item, index) => (
        <SplideSlide className="flex items-center" key={index}>
          <div className="flex items-center relative" key={index}>
            <div className="text-content flex flex-col">
              <h3>{item.title}</h3>
            </div>
            <div className="image-wrapper solute w-full h-full">
              <Image
                src={item.image}
                alt="Slider image 1"
                height={450}
                layout="responsive"
                width={1400}
              />
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
