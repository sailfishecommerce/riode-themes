import TopHeader from "@/components/Header/TopHeader";
import Nav from "@/components/Header/Nav";
import HeaderbottoMenu from "@/components/Menu/HeaderbottomMenu";

export default function index() {
  return (
    <header className="flex flex-col">
      <TopHeader />
      <Nav />
      <HeaderbottoMenu />
    </header>
  );
}
