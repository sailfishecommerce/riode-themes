import { Fragment } from "react";
import Link from "next/link";
import footerContent from "@/json/footer.json";

export default function FooterBottom() {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex flex-wrap text-white w-3/5 justify-between">
        {footerContent.section1.map((footerArray, index) => (
          <ul className="my-2" key={index}>
            {footerArray.map((footerItem, index) => (
              <Fragment key={index}>
                {footerItem.type === "title" && (
                  <li key={footerItem.name} className="text-xl font-bold my-2">
                    {footerItem.name}
                  </li>
                )}
                {footerItem.type === "phone" && (
                  <li className="my-2" key={footerItem.name}>
                    <span className="text-sm">{footerItem.name}</span> :
                    <span className="ml-1 text-sm text-gray-400 font-semibold">
                      {footerItem.text}
                    </span>
                  </li>
                )}
                {footerItem.type === "email" && (
                  <li className="my-2" key={footerItem.name}>
                    <span className="text-sm">{footerItem.name}</span> :
                    <span className="ml-1 text-sm text-gray-400 font-semibold">
                      {footerItem.text}
                    </span>
                  </li>
                )}
                {footerItem.type === "text" && (
                  <li className="my-2" key={footerItem.name}>
                    <span className="text-sm">{footerItem.name}</span> :
                    <span className="ml-1 text-sm text-gray-400 font-semibold">
                      {footerItem.text}
                    </span>
                  </li>
                )}
                {footerItem.type === "link" && footerItem.link && (
                  <li className="my-2" key={footerItem.name}>
                    <Link href={footerItem.link} passHref>
                      <a
                        className="text-gray-400 text-sm font-semibold"
                        title={footerItem.text}
                      >
                        {footerItem.text}
                      </a>
                    </Link>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        ))}
      </div>
      <ul className="section-2 flex flex-col w-1/5">
        {footerContent.section2.map((footerContent, index) => (
          <li key={index} className="text-gray-500 mb-2">
            {footerContent}
          </li>
        ))}
      </ul>
    </div>
  );
}
