import Link from "next/link";
import Image from "next/image";
import Ratings from "@/components/Ratings";

interface ProductGridItemProps {
  content: {
    name: string;
    img: string;
    price: string;
    rating: number;
  };
}

export default function ProductGridItem({ content }: ProductGridItemProps) {
  return (
    <div className="flex hover:bg-gray-50 productGridItem items-center my-2 pr-4">
      <Link href={`#${content.name}`} passHref>
        <a className="flex items-center my-2" title={content.name}>
          <div className="image mr-4">
            <Image
              src={content.img}
              alt={content.name}
              height={150}
              width={150}
            />
          </div>
          <div className="text-content flex flex-col">
            <h5 className="title">{content.name}</h5>
            <p className="text-orange-500 font-medium">{content.price}</p>
            <Ratings rating={content.rating} />
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .productGridItem:hover h5 {
            color: blue;
          }
        `}
      </style>
    </div>
  );
}
