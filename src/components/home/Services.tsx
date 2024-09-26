import Image from "next/image";

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description:
      "We have developed secure and user-friendly applications for both iOS and Android to give you the best experience with numerous business requirements.",
    image: "/assets/home/mobile.png",
    bgClass: "bg-primary text-white",
  },
  {
    id: 2,
    title: "APP DEVELOPMENT",
    description:
      "Our best-in-class dynamic responsive websites focus upon business needs with a promise for maximum performance, user experience, as well as cross-platform compatibility.",
    image: "/assets/home/web.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 3,
    title: "Artifical Intelligence",
    description:
      "Volvrit designs advanced AI algorithms to help in smarter automation, better data analysis, and improved decision-making in a diverse range of industries.",
    image: "/assets/home/digital.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 4,
    title: "Saas Development",
    description:
      "Volvrit builds scalable SaaS platforms, providing smooth cloud-based solutions to simplify the deployment, management, and collaboration of software services.",
    image: "/assets/home/crm.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 5,
    title: "Blockchain DEVELOPMENT",
    description:
      "Volvrit develops secure blockchain solutions, which tend to ensure secure, transparent, and decentralized transactions across finance, supply chains, and more.Volvrit develops secure blockchain solutions, which tend to ensure secure, transparent, and decentralized transactions across finance, supply chains, and more.",
    image: "/assets/home/web.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 6,
    title: "UI/UX Desiging",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward..",
    image: "/assets/home/web.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 7,
    title: "DIGITAL MARKETING",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    image: "/assets/home/digital.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 8,
    title: "CRM DEVELOPMENT",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    image: "/assets/home/crm.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 9,
    title: "API DEVELOPMENT",
    description:
      "Development of customized CRM solutions to set up an efficient customer interaction model, efficient sales processes, and improvement of client relationship management.",
    image: "/assets/home/crm.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
];

const Services = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:pt-20 lg:px-36 container mx-auto bg-white">
      <div className="grid grid-cols-3 gap-7 container mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${service.bgClass} cursor-pointer p-5 rounded-xl shadow-corner hover:shadow-none transition-all duration-200 ease-linear`}
          >
            <div className="px-3">
              <Image
                width={40}
                height={40}
                alt={service.title}
                className="object-contain"
                src={service.image}
              />
            </div>
            <h3 className="text-2xl 2xl:text-4xl py-5 font-bold uppercase">
              <span>
                {service.title.split(" ")[0]}
                <br />
              </span>
              <span>{service.title.split(" ")[1]}</span>
            </h3>
            <p className="text-sm 2xl:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="lg:w-1/2">
        <video
          loop
          muted
          autoPlay
          playsInline
          src={"/assets/video/home/smartphone.mp4"}
          poster={"/assets/video/home/smartphone.mp4#t=0.1"}
          className="w-full h-[50vh] bg-black md:h-full object-cover rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default Services;
