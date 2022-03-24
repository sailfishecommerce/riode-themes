import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/splide/dist/css/splide.min.css";
import brandContent from "@/json/brand.json";

export default function BrandSlider() {
  return (
    <Splide
      options={{ autoplay: true, perPage: 6, type: "loop" }}
      className="border-t border-b w-2/3 mx-auto items-center border-gray-300 my-8 container justify-center"
    >
      {brandContent.map((content) => (
        <div key={content} className="w-1/6 mx-2 flex justify-center">
          <SplideSlide>
            <Image src={content} alt={content} height={70} width={120} />
          </SplideSlide>
        </div>
      ))}
    </Splide>
  );
}
