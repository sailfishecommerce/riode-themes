import Link from "next/link";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function ShopNowBannerItem({ content, index }: Props) {
  const textPosition =
    index === 0
      ? "justify-start"
      : index === 1
      ? "justify-center mx-auto items-center place-items-center"
      : "justify-end";
  const titlePosition = index === 1 ? "order-2 mb-8 mt-4" : "";
  const buttonStyle =
    index === 1
      ? "order-3 border-2 border-blue-500 text-blue-500 text-center px-8 py-3 hover:bg-blue-500 hover:text-white"
      : "";
  const linkStyle = index === 1 ? "mx-8" : "";
  const hideBorder = index === 1 ? "hidden" : "flex";
  return (
    <Link key={content.title} href="#" passHref>
      <a
        title={`${content.title} category`}
        className={`banner relative w-1/3 ${linkStyle}`}
      >
        <Image
          src={content.image}
          alt={content.title}
          height={200}
          width={350}
          layout="responsive"
          className="rounded-lg"
        />
        <div className="content-wrapper absolute flex items-center px-6 top-0 w-full h-full">
          <div className={`content flex flex-col text-white ${textPosition}`}>
            <h3 className={`font-bold mb-2 text-3xl ${titlePosition}`}>
              {content.title}
            </h3>
            <p className="text-sm mb-2">{content.description}</p>
            <div
              className={`${hideBorder} mb-12 border-b-4 h-4 w-8 border-white`}
            />
            <button
              className={`button flex items-center hover:border-b-2 font-bold ${buttonStyle}`}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
