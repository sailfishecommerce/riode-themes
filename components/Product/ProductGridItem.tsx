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
    <div className="flex items-center my-2">
      <div className="image mr-4">
        <Image src={content.img} alt={content.name} height={150} width={150} />
      </div>
      <div className="text-content flex flex-col">
        <h5 className="title">{content.name}</h5>
        <p className="text-orange-500 font-medium">{content.price}</p>
        <Ratings rating={content.rating} />
      </div>
    </div>
  );
}
