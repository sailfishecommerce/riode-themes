import { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  content: {
    text: string;
    children: Array<{ text: string; link: string; sub?: any[] }>;
  };
}

export default function Dropdown({ content }: DropdownProps | any) {
  const [dropdown, showDropdown] = useState(false);

  return (
    <div className="mx-2">
      <div
        onMouseEnter={() => showDropdown(true)}
        onMouseLeave={() => showDropdown(false)}
        className="dropdown text"
      >
        {content.text}
      </div>
      {dropdown && (
        <div className="dropdown-content">
          {content.children.map((item: any) => {
            return item.link ? (
              <Link key={item.text} href={item.link} passHref>
                <a title={item.text}>{item.text}</a>
              </Link>
            ) : (
              <a key={item.text} className="mx-2" title={item.text}>
                {item.text}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
