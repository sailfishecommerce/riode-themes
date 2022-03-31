import headerMenu from "@/json/menu.json";
import IconLink, { DoubleLinkIcon } from "@/components/Link/IconLink";

export default function HeadertopMenu() {
  return (
    <ul className="flex items-center justify-between">
      {headerMenu.topMenu.map((menuItem) => {
        return menuItem.type === "LINK-ICON" ? (
          <IconLink content={menuItem} />
        ) : menuItem.type === "LINK-ICON-DOUBLE" ? (
          <DoubleLinkIcon content={menuItem} />
        ) : null;
      })}
    </ul>
  );
}
