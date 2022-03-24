import Image from "next/image";
import Link from "next/link";

interface articleProps {
  article: {
    date: string;
    img: string;
    title: string;
    description: string;
    link: string;
  };
}

export default function FeaturedArticleItem({ article }: articleProps) {
  return (
    <Link href={article.link} passHref>
      <a
        className="flex flex-col bg-white shadow-lg rounded-md mx-6 p-6 px-8 border"
        title={article.title}
      >
        <div className="image-wrapper relative">
          <div className="date bg-white rounded-md p-3 absolute top-5 left-5 z-20">{article.date}</div>
          <Image
            src={article.img}
            height={250}
            width={400}
            alt={article.title}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="text-content flex flex-col justify-start items-start">
          <h3 className="text-xl">{article.title}</h3>
          <p className="text-md">{article.description}</p>
          <button className="button mt-8 text-blue-600 hover:border-blue-600 hover:border-b-2 font-bold">
            READ MORE
          </button>
        </div>
      </a>
    </Link>
  );
}
