import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <div className="bg-black w-full py-8">
      <div className="container mx-auto">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
}
