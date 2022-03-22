import benefits from "@/json/benefits.json";
import BenefitCard from "@/components/Benefits/BenefitCard";

export default function index() {
  return (
    <section className="container w-full mx-auto bg-white flex px-12 py-6 mt-12 m-4 items-center justify-between shadow-lg rounded-lg border border-gray-200">
      {benefits.map((content) => (
        <BenefitCard key={content.title} content={content} />
      ))}
    </section>
  );
}
