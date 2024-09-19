import Image from "next/image";

interface CardProps {
  imageUrl: string;
  padding?: string;
  imageAlt: string;
  relative?: boolean;
  children: React.ReactNode;
}

export default function Card({
  relative,
  imageUrl,
  imageAlt,
  children,
  padding,
}: CardProps) {
  return (
    <div
      className={`bg-primary flex flex-col justify-center items-center text-center ${
        relative ? "" : "mb-5 lg:mb-20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {children}
        <div
          className={`relative ${
            relative
              ? "md:p-10 lg:p-20 md:pb-0 lg:pb-0"
              : `${padding ? padding : "px-10"} top-5 md:top-10 lg:top-20`
          }`}
        >
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
