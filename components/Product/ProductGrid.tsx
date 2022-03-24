import productGridContent from "@/json/products-group.json";
import ProductGridItem from "./ProductGridItem";

export default function ProductGrid() {
  return (
    <section className="flex flex-wrap container mx-auto justify-center">
      {productGridContent.map((content, index) => (
        <div key={index} className="flex flex-col">
          <h3 className="text-3xl mb-4 font-bold">{content.category}</h3>
          {content.content.map((item, index) => (
            <ProductGridItem content={item} key={index} />
          ))}
        </div>
      ))}
    </section>
  );
}
