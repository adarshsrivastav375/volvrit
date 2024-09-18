import Image from "next/image";

interface BackgroundImageProps {
  rounded?: string;
  overlay?: boolean;
  imageUrl?: string;
  alignment?: "center" | "left";
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  rounded,
  overlay,
  imageUrl,
  children,
  alignment = "center",
}) => {
  const alignmentClasses =
    alignment === "center"
      ? "justify-center text-center"
      : "justify-start text-left";

  return (
    <div
      className={`relative w-full h-full ${
        rounded && "rounded-xl overflow-hidden"
      }`}
    >
      <Image
        fill
        alt="background"
        className={`z-0 object-cover ${imageUrl ? "hidden lg:block" : ""} `}
        src={imageUrl ? imageUrl : "/assets/home/bgbanner.png"}
      />
      <div
        className={`container h-full mx-auto p-4 md:p-6 lg:p-12 relative inset-0 z-10 flex items-center ${alignmentClasses} ${
          overlay && "bg-primary bg-opacity-50"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
