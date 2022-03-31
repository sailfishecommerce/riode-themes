import dropdownContent from "@/json/menu.json";
import Dropdown from "@/components/Dropdown";

export default function HeaderbottomMenu() {
  // function displayDropdown(dropdown) {
  //   switch(dropdown){
  //     case "DROPDOWN":
  //       return <
  //   }
  // }
  return (
    <div className="flex items-center justify-between">
      {dropdownContent.menuleft.map((content) => {
        content.type === "DROPDOWN" && (
          <Dropdown text={content.text} content={content.children} />
        );
      })}
    </div>
  );
}
