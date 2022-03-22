interface RatingsProps {
  review: number;
  rating: number;
}

export default function index({ review, rating }: RatingsProps) {
  const reviewText = review > 1 ? "Reviews" : "Review";
  
  return (
    <div className="flex items-center ">
      <span className="rating stars">
        <i className="fa-star mr-1" />
      </span>
      <div className="reviews flex items-center font-thin text-gray">
        (<span className="mx-2">{rating}</span>
        <span className="mx-2">{reviewText})</span>
      </div>
    </div>
  );
}
