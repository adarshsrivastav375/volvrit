import Image from "next/image";
import Link from "next/link";

const UniqueFeature = () => {
  const uniqueFeatures = [
    {
      id: 1,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 2,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 3,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 4,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 5,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 6,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 7,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
    {
      id: 8,
      icon: "/assets/services/unique.png",
      title: "Data-driven Digital Marketing Services",
    },
  ];
  return (
    <div className="bg-primary mt-5 md:mt-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 py-10 text-center text-white">
        <p className="text-sm font-light mb-2">— Services</p>
        <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
          Crafting a Solutions with Unique Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-10 text-left">
          {uniqueFeatures.slice(0, 6)?.map((item: any) => {
            return (
              <div
                className="p-5 rounded-xl border border-white"
                key={item?.id}
              >
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={40}
                  height={40}
                  className="w=fit h-auto object-contain"
                />
                <h3 className="font-extralight pt-3 lg:w-1/2">{item?.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 pt-5 pb-9 lg:py-10 text-left md:px-20 lg:px-40">
          {uniqueFeatures.slice(6, 8)?.map((item: any) => {
            return (
              <div
                className="p-5 rounded-xl border border-white"
                key={item?.id}
              >
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={50}
                  height={50}
                  className="w=fit h-auto object-contain"
                />
                <h3 className="font-extralight pt-3 lg:w-1/2">{item?.title}</h3>
              </div>
            );
          })}
        </div>
        <Link
          href={"tel:+917599990331"}
          className="py-2 px-6 left-1/2 -translate-x-1/2 -bottom-16 rounded-lg bg-white text-primary transition-all text-sn ease-in-out"
          aria-label="Phone number"
        >
          Set up meeting with our team
        </Link>
      </div>
    </div>
  );
};

export default UniqueFeature;
