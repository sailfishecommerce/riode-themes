import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import IconClasses from "@/lib/IconClasses";

import "@splidejs/splide/dist/css/splide.min.css";
import sliderContent from "@/json/slider.json";

export default function HomepageSlider() {
  return (
    <Splide>
      {sliderContent.map((item, index) => {
        const textPosition =
          item.position === "left" ? "justify-start" : "justify-end";
        return (
          <SplideSlide className="flex items-center" key={index}>
            <div className="flex items-center relative mx-auto" key={index}>
              <div className="absolute top-0 left-0 mx-auto z-40 w-screen h-full flex items-center">
                <div className={`container flex mx-auto ${textPosition}`}>
                  <div className="text-content flex flex-col text-white">
                    {item.svgText && (
                      <div className="flex items-center">
                        <h6 className="font-medium text-2xl italic text-black">
                          {item.ads}
                        </h6>
                        <span className="flex items-center bg-gray-300 p-2 rounded-md mx-2">
                          <FontAwesomeIcon
                            className="mx-2"
                            icon={IconClasses("star")}
                            spin={true}
                            inverse
                          />
                          <h2 className="text-blue-700 font-medium italic text-2xl">
                            {item.svgText}
                          </h2>
                          <FontAwesomeIcon
                            className="mx-2"
                            icon={IconClasses("star")}
                            stroke=""
                            spin={true}
                          />
                        </span>
                      </div>
                    )}
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
        );
      })}
    </Splide>
  );
}
