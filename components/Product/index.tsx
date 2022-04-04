import Image from "next/image";
import Link from "next/link";
import Ratings from "@/components/Ratings";

interface ProductProps {
  content: {
    title: string;
    brand: string;
    rating: number;
    price: number;
    reviews: number;
    img1: string;
  };
}

export default function index({ content }: ProductProps) {
  return (
    <div className="flex flex-col mr-4">
      <Link href="#product" passHref>
        <a title={`Buy ${content.title}`}>
          <Image
            src={content.img1}
            alt={content.title}
            height={400}
            width={400}
          />
          <div className="content flex  mt2 flex-col items-center justify-center bg-white">
            <p className="font-thin font-bold">{content.brand}</p>
            <h4 className="font-medium">{content.title}</h4>
            <h6 className="text-orange-700">$ {content.price}</h6>
            <Ratings review={content.reviews} rating={content.rating} />
          </div>
        </a>
      </Link>
    </div>
  );
}
