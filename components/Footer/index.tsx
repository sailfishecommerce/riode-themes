import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

export default function index() {
  return (
    <div className="bg-black w-full py-8">
      <div className="container mx-auto">
        <div className="top-footer flex items-center justify-between">
          <Logo footer />
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
