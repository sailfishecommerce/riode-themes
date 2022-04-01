import dropdownContent from "@/json/menu.json";
import Dropdown from "@/components/Dropdown";
import IconLink from "@/components/Link/IconLink";

export default function HeaderbottomMenu() {
  // function displayDropdown(dropdown) {
  //   switch(dropdown){
  //     case "DROPDOWN":
  //       return <
  //   }
  // }
  return (
    <div className="bg-white flex items-center h-12">
      <div className="container mx-auto flex items-center">
        {dropdownContent.menuleft.map((content) => {
          return content.type === "DROPDOWN" ? (
            <Dropdown content={content} />
          ) : content.type === "LINK-ICON" ? (
            <IconLink iconClassName={content} />
          ) : null;
        })}
      </div>
    </div>
  );
}
