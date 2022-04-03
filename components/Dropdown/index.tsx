import { useState } from "react";
import Link from "next/link";
import DropdownCaret from "./DropdownCaret";

interface DropdownProps {
  content: {
    text: string;
    children: Array<{ text: string; link: string; sub?: any[] }>;
  };
}

export default function Dropdown({ content }: DropdownProps | any) {
  const [active, setActive] = useState(false);

  return (
    <div className="mx-2">
      <div className="flex justify-center">
        <div className="dropdown relative">
          <button
            onMouseEnter={() => setActive(!active)}
            className="px-2 ml-2 lg:px-4 py-2 font-medium text-xs leading-tight uppercase hover:text-blue-700 active:bg-red-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex z-50 items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton1"
            aria-expanded="false"
            aria-label={`${content.text}`}
          >
            {content.text}
            <DropdownCaret />
          </button>
          {active && (
            <ul
              className="min-w-max absolute bg-white text-base z-40 float-left py-2 list-none top-6 flex flex-col text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1"
            >
              {content.children.map((item: any) => {
                return item.link ? (
                  <Link key={item.text} href={item.link} passHref>
                    <li>
                      <a
                        aria-label="dropdown"
                        className={`dropdown-item text-sm py-1 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100`}
                        href="#"
                        title={item.text}
                      >
                        {item.text}
                      </a>
                    </li>
                  </Link>
                ) : (
                  <a key={item.text} className="mx-2" title={item.text}>
                    {item.text}
                  </a>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
