import dropdownContent from "@/json/menu.json";
import Dropdown from "@/components/Dropdown";
import IconLink from "@/components/Link/IconLink";
import MegaDropdown from "@/components/Dropdown/MegaDropdown";

function displayMenu(menuPosition: "menuleft" | "menuright") {
  return (
    <div className="flex items-center">
      {dropdownContent[menuPosition].map((content, index: number) => {
        return content.type === "DROPDOWN" ? (
          <Dropdown key={index} content={content} />
        ) : content.type === "LINK-ICON" ? (
          <IconLink key={index} content={content} />
        ) : content.type === "MEGA-DROPDOWN" ? (
          <MegaDropdown key={index} content={content} />
        ) : null;
      })}
    </div>
  );
}

export default function HeaderbottomMenu() {
  return (
    <div className="bg-white flex items-center h-12">
      <div className="container mx-auto flex items-center justify-between">
        {displayMenu("menuleft")}
        {displayMenu("menuright")}
      </div>
    </div>
  );
}
