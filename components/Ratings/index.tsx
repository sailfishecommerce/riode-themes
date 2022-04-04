interface RatingsProps {
  review?: number | any;
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
        (<span className="mx-1">{rating}</span>
        {reviewText && <span>{reviewText})</span>}
      </div>
    </div>
  );
}
