import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/splide/dist/css/splide.min.css";
import sliderContent from "@/json/slider.json";

export default function HomepageSlider() {
  return (
    <Splide>
      {sliderContent.map((item, index) => (
        <SplideSlide className="flex items-center" key={index}>
          <div className="flex items-center relative mx-auto" key={index}>
            <div className="absolute top-0 left-0 mx-auto z-40 w-screen h-full flex items-center">
              <div className="container flex mx-auto">
                <div className="text-content flex flex-col text-white">
                  <h3 className="text-6xl font-bold">{item.title}</h3>
                  <h5 className="text-5xl font-light">{item.titlePar}</h5>
                  <p className="text-xl font-medium">{item.description}</p>
                  <button className="bg-black text-white w-44 p-4 mt-8 font-bold text-xl hover:bg-gray-800">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="image-wrapper w-screen">
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={1500}
                layout="responsive"
              />
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
