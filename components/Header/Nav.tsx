import Logo from "@/components/Logo";
import Searchbar from "@/components/Algolia/Searchbar";
import NavMenu from "@/components/Menu/NavMenu";

export default function Nav() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Searchbar />
        <NavMenu />
      </div>
    </div>
  );
}
