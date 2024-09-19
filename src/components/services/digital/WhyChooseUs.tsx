import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const WhyChooseUs = () => {
  const chooseUs = [
    {
      id: 1,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
    {
      id: 2,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
    {
      id: 3,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
    {
      id: 4,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
    {
      id: 5,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
    {
      id: 6,
      icon: "/assets/services/logo1Digital.png",
      title: "Data-driven Digital Marketing Services",
      description:
        "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Volvrit’s results-oriented digital marketing services.",
    },
  ];
  return (
    <div className="container mx-auto pt-10 px-4 md:px-6 lg:px-20 text-center">
      <HeadingText
        headingText1="Why Choose"
        headingText2="Volvrit As Your Digital Marketing Agency"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 md:pt-10">
        {chooseUs.map((choose: any) => {
          return (
            <div
              key={choose?.id}
              className="p-4 rounded-xl border-2 border-primary/10"
            >
              <div className="flex gap-5 items-center justify-start">
                <Image
                  width={72}
                  height={72}
                  alt={choose.title}
                  src={choose?.icon}
                  className="bg-primary rounded-full"
                />
                <h5 className="font-semibold text-left">{choose?.title}</h5>
              </div>
              <p className="text-sm text-left pt-3">{choose?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
