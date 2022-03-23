import Link from "next/link";
import Image from "next/image";

interface Props {
  footer?: boolean;
}

export default function index({ footer }: Props) {
  const logoSrc = footer ? "/logo-footer.png" : "/riode.svg";
  const imageDimension = footer
    ? {
        height: 50,
        width: 150,
      }
    : {
        height: 100,
        width: 200,
      };
  return (
    <Link href="/" passHref>
      <a title="welcome to riode stores">
        <Image
          src={logoSrc}
          alt="logo"
          height={imageDimension.height}
          width={imageDimension.width}
        />
      </a>
    </Link>
  );
}
