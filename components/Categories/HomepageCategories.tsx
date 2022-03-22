import categoryList from "@/json/homepage-categories.json";
import CategoryCard from "@/components/Categories/CategoryCard";

export default function HomepageCategories() {
  return (
    <section className="w-full flex flex-col">
      <h2 className="font-bold text-bold text-4xl">Our Cattegories</h2>
      <div className="flex items-center w-full justify-between">
        {categoryList.map((category) => (
          <CategoryCard key={category.title} content={category} />
        ))}
      </div>
    </section>
  );
}
