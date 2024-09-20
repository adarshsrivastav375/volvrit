import Link from "next/link";
import Image from "next/image";

const Logo = ({ size }: { size?: number }) => {
  return (
    <Link
      href={"/"}
      aria-label="Home Page"
      className="flex place-self-start lg:gap-2 items-center my-auto gap-2 md:gap-0"
    >
      <figure>
        <Image
          width={size ?? 28}
          height={size ?? 28}
          alt="volvrit Logo"
          src={"/assets/logo/volvrit_logo.png"}
          className="md:w-4/5 lg:w-full h-full aspect-square object-contain"
        />
      </figure>
      <figcaption className="text-xl md:text-base lg:text-xl text-black uppercase font-bold">
        Volvrit
      </figcaption>
    </Link>
  );
};

export default Logo;
