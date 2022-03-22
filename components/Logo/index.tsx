import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <Link href="/riode" passHref>
      <a title="welcome to riode stores">
        <Image src="/riode.svg" alt="logo" height={100} width={200} />
      </a>
    </Link>
  );
}
