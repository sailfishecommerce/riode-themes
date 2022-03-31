import TopHeaderMenu from "@/components/Menu/HeadertopMenu";

export default function TopHeader() {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <p className="text-sm">Welcome to Riode store message or remove it</p>
        <TopHeaderMenu />
      </div>
    </div>
  );
}
