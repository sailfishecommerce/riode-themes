import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

export default function FooterTop() {
  return (
    <div className="top-footer py-6 pb-8 flex items-center justify-between border-b border-gray-700">
      <Logo footer />
      <Newsletter />
    </div>
  );
}
