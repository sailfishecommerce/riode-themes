import { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  text: string;
  content: Array<{ text: string; link: string; sub?: any[] }>;
}

export default function Dropdown({ text, content }: DropdownProps | any) {
  const [dropdown, showDropdown] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => showDropdown(true)}
        onMouseLeave={() => showDropdown(false)}
        className="dropdown text"
      >
        {text}
      </div>
      {dropdown && (
        <div className="dropdown-content">
          {content.map((item: any) => (
            <Link key={item.text} href={item.link} passHref>
              <a title={item.text}>{item.text}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
