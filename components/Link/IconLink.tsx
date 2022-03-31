import Link from "next/link";

export default function IconLink({ content }: any) {
  return (
    <Link href={content.link} passHref>
      <a className="mx-2 hover:text-blue-500">
        <i className={content.icon} />
        <p>{content.text}</p>
      </a>
    </Link>
  );
}

export function DoubleLinkIcon({ content }: any) {
  const borderedEnd = "border-r border-gray-200 pr-2";
  return (
    <div className="flex items-center">
      <i className={content.icon} />
      {content.group.map((item: any, index: number) => {
        const linkStyle = index === 0 ? borderedEnd : "";
        return (
          <Link key={item.text} href={item.link} passHref>
            <a className={`${linkStyle} mx-2 hover:text-blue-500`}>
              <p>{item.text}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
