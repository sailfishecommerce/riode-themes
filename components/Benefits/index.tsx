import benefits from "@/json/benefits.json";
import BenefitCard from "@/components/Benefits/BenefitCard";

export default function index() {
  return (
    <section className="container mx-auto bg-white flex items-center justify-between shadow-lg rounded-lg">
      {benefits.map((content) => (
        <BenefitCard key={content.title} content={content} />
      ))}
    </section>
  );
}
