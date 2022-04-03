import { Fragment, useState } from "react";
import Link from "next/link";
import DropdownCaret from "./DropdownCaret";

interface DropdownProps {
  content: {
    text: string;
    children: {
      title: string;
      content: Array<{ text: string; link: string; tag?: string }>;
    };
  };
}

export default function MegaDropdown({ content }: DropdownProps | any) {
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
              className="min-w-max justify-between shadow-lg absolute bg-white text-base z-40 float-left py-2 list-none top-6 flex items-center text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1"
            >
              {content.children.map((item: any, index: number) => {
                return (
                  <div className="menu-item mx-8" key={index}>
                    <h4 className="mx-0 font-medium text-md mb-3">
                      {item.title}
                    </h4>
                    <div className="menu-item-group grid gap-x-20 grid-cols-2">
                      {item.content.map(
                        (menuItem: {
                          text: string;
                          link: string;
                          tag: string;
                          color: string;
                        }) => {
                          const tagStyle = menuItem.color
                            ? menuItem.color
                            : "bg-green-500";
                          return (
                            <Link
                              key={menuItem.text}
                              href={`#${menuItem.link}`}
                              passHref
                            >
                              <li>
                                <a
                                  aria-label="dropdown"
                                  className={`dropdown-item text-sm py-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100`}
                                  href="#"
                                  title={menuItem.text}
                                >
                                  {menuItem.text}
                                  {menuItem.tag && (
                                    <span
                                      className={`${tagStyle} mx-2 p-1 text-white rounded-sm md font-bold`}
                                    >
                                      {menuItem.tag}
                                    </span>
                                  )}
                                </a>
                              </li>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
