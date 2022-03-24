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
    <div className="flex items-center">
      <div className="image">
        <Image src={content.img} alt={content.name} height={200} width={200} />
      </div>
      <div className="text-content flex flex-col">
        <h5 className="title">{content.name}</h5>
        <p>{content.price}</p>
        <Ratings rating={content.rating} />
      </div>
    </div>
  );
}
