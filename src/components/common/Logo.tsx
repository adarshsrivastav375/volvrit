import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} aria-label="Home Page" className="flex gap-2 items-center">
      <figure>
        <Image
          width={36}
          height={36}
          alt="volvrit Logo"
          src={"/assets/logo/volvrit_logo.png"}
          className="w-full h-full aspect-square object-contain"
        />
      </figure>
      <figcaption className="text-xl uppercase font-bold">
        Volvrit
      </figcaption>
    </Link>
  );
};

export default Logo;
