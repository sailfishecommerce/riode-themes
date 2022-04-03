import headerMenu from "@/json/menu.json";
import IconLink, { DoubleLinkIcon } from "@/components/Link/IconLink";
import Dropdown from "@/components/Dropdown";

export default function HeadertopMenu() {
  return (
    <ul className="flex items-center justify-between">
      {headerMenu.topMenu.map((menuItem, index) => {
        return menuItem.type === "LINK-ICON" ? (
          <IconLink key={index} content={menuItem} />
        ) : menuItem.type === "LINK-ICON-DOUBLE" ? (
          <DoubleLinkIcon key={index} content={menuItem} />
        ) : menuItem.type === "DROPDOWN" ? (
          <Dropdown content={menuItem} key={menuItem.text} />
        ) : null;
      })}
    </ul>
  );
}
