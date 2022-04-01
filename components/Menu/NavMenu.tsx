import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navMenuContent from "@/json/nav-menu.json";
import IconClasses from "@/lib/IconClasses";

export default function NavMenu() {
  return (
    <ul className="flex item-center justify-center">
      {navMenuContent.map((navList: any, index: number) => {
        const iconPosition = navList.iconPosition?.includes("right")
          ? "order-2"
          : "order-1";
        const textPosition = navList.iconPosition?.includes("right")
          ? "order-1"
          : "order-2";
        console.log("IconClasses(navList.icon)", IconClasses(navList.icon));
        const centeredIcon =
          index === 1 ? "border-r-2 border-l-2 rder-2 border-gray-300 px-6" : "";
        return (
          <li className={`flex items-center mx-2 ${centeredIcon}`} key={index}>
            {navList.icon && (
              <FontAwesomeIcon
                className={`${iconPosition}`}
                size="2x"
                color="#2266CC"
                type=""
                icon={IconClasses(navList.icon)}
              />
            )}
            {navList.title && (
              <div
                className={`w-4/5 span flex flex-col order-2 ${textPosition} mx-2`}
              >
                <p className="text-sm">{navList?.title}</p>
                <h6 className="font-bold">{navList?.text}</h6>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
