import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navMenuContent from "@/json/nav-menu.json";
import IconClasses from "@/lib/IconClasses";

export default function NavMenu() {
  return (
    <ul className="flex item-center w-1/4">
      {navMenuContent.map((navList: any, index: number) => {
        const iconPosition = navList.iconPosition?.includes("right")
          ? "order-2"
          : "order-1";
        const textPosition = navList.iconPosition?.includes("right")
          ? "order-1"
          : "order-2";
        console.log("IconClasses(navList.icon)", IconClasses(navList.icon));
        return (
          <li className="flex items-center mx-2" key={index}>
            {navList.icon && (
              <FontAwesomeIcon
                className={`${iconPosition} w-1/5`}
                size="1x"
                icon={IconClasses(navList.icon)}
              />
            )}
            {navList.title && (
              <div
                className={` w-4/5 span flex flex-col order-2 ${textPosition}`}
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
