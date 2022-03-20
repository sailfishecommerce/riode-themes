import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <Link href="/riode" passHref>
      <Image src="/riode.svg" alt="logo" height={100} width={200} />
    </Link>
  );
}
