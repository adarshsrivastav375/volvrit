import Image from "next/image";

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  relative?: boolean;
  children: React.ReactNode;
}

export default function Card({
  relative,
  imageUrl,
  imageAlt,
  children,
}: CardProps) {
  return (
    <div
      className={`bg-primary flex flex-col justify-center items-center text-center ${
        relative ? "" : "mb-5 lg:mb-20"
      }`}
    >
      <div className="container mx-auto lg:px-20">
        {children}
        <div className={`relative ${relative ? "p-20 pb-0" : "px-10 top-5 md:top-10 lg:top-20"}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full h-full z-10"
          />
        </div>
      </div>
    </div>
  );
}
