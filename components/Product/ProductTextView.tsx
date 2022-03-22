import Ratings from "@/components/Ratings";

interface Props {
  content: {
    brand: string;
    name: string;
    price: string;
    rating: number;
    review: number;
  };
}

export default function ProductTextView({ content }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="product-brand text-center font-thin">{content.brand}</h3>
      <h4 className="product-name text-center font-medium">{content.name}</h4>
      <h2 className="font-bold text-red-500">{content.price}</h2>
      <Ratings rating={content.rating} review={content.review} />
    </div>
  );
}
