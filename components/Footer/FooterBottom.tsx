import { Fragment } from "react";
import Link from "next/link";
import footerContent from "@/json/footer.json";

export default function FooterBottom() {
  return (
    <div className="flex flex-wrap text-white">
      <div>
        {footerContent.map((footerArray, index) => (
          <ul key={index}>
            {footerArray.map((footerItem, index) => (
              <Fragment key={index}>
                {footerItem.type === "title" && (
                  <li key={footerItem.name} className="text-2xl font-bold">
                    {footerItem.name}
                  </li>
                )}
                {footerItem.type === "phone" && (
                  <li key={footerItem.name}>
                    {footerItem.name} : {footerItem.text}
                  </li>
                )}
                {footerItem.type === "email" && (
                  <li key={footerItem.name}>
                    {footerItem.name} : {footerItem.text}
                  </li>
                )}
                {footerItem.type === "text" && (
                  <li key={footerItem.name}>
                    {footerItem.name} : {footerItem.text}
                  </li>
                )}
                {footerItem.type === "link" && footerItem.link && (
                  <li key={footerItem.name}>
                    <Link href={footerItem.link} passHref>
                      <a>{footerItem.text}</a>
                    </Link>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
