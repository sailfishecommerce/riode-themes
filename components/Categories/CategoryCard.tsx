import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  content: {
    image: string;
    title: string;
    link: string;
  };
}

export default function CategoryCard({ content }: CategoryCardProps) {
  return (
    <Link href={content.link} passHref>
      <a
        className="border-0 rounded-lg w-1/3 mx-2 relative"
        title={`${content.title} category`}
      >
        <Image
          src={content.image}
          alt={`${content.title} category`}
          height={300}
          width={300}
          layout="responsive"
        />
        <div className="wrapper absolute bottom-10 w-full flex justify-center">
          <div className="card-title bg-white w-80 rounded-sm hover:bg-blue-600 hover:text-white font-bold text-center">
            {content.title}
          </div>
        </div>
      </a>
    </Link>
  );
}
