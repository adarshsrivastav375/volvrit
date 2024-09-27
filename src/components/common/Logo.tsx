import Link from "next/link";
import Image from "next/image";

const Logo = ({ size, textColor }: { size?: number; textColor?: string }) => {
  return (
    <Link
      href={"/"}
      aria-label="Home Page"
      className="flex place-self-start lg:gap-2 items-center my-auto gap-2 md:gap-0"
    >
      <figure>
        <Image
          width={size ?? 48}
          height={size ?? 48}
          alt="volvrit Logo"
          src={"/assets/logo/volvrit_logo.png"}
          className="md:w-4/5 lg:w-full 2xl:w-20 3xl:w-24 4xl:w-28 5xl:w-36 h-full aspect-square object-contain"
        />
      </figure>
      <figcaption
        className={`text-xl md:text-base lg:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-6xl 5xl:text-7xl ${
          textColor ? textColor : "text-black"
        } uppercase font-semibold`}
      >
        Volvrit
      </figcaption>
    </Link>
  );
};

export default Logo;
