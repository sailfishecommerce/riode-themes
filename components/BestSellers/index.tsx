import bestSellingProducts from "@/json/best-selling.json";
import Product from "@/components/Product";

export default function index() {
  return (
    <section className="container mx-auto justify-center mt-4 bg-white">
      <h3 className="text-center font-bold mb-4 text-2xl">Best Sellers</h3>
      <div className="flex items-center">
        {bestSellingProducts.map((content) => (
          <Product content={content} key={content.title} />
        ))}
      </div>
    </section>
  );
}
