import Image from "next/image";

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function FullCard({ imageUrl, imageAlt, children }: CardProps) {
  return (
    <div
      className={`bg-primary flex flex-col justify-center items-center text-center`}
    >
      <div className="mx-auto px-4 md:px-6">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full h-auto z-10"
          />
          <div className="absolute z-20 mx-auto top-0 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
