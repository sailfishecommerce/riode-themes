import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ApplayoutProps {
  children: JSX.Element;
}

export default function Applayout({ children }: ApplayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
