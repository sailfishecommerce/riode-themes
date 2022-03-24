import featuredArticles from "@/json/featured-articles.json";
import FeaturedArticleItem from "./FeaturedArticleItem";

export default function FeaturedArticles() {
  return (
    <section className="container mx-auto flex flex-col my-8 mb-14">
      <h3 className="text-3xl text-center font-bold">Featured Articles</h3>
      <div className="article-content flex items-center mx-auto mt-8">
        {featuredArticles.map((article) => (
          <FeaturedArticleItem key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
