import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-8xl mx-auto pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-20 2xl:px-40">
      <div className="bg-primary rounded-2xl lg:rounded-3xl p-5 md:p-7 lg:p-14 text-white relative flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <p className="text-base 2xl:text-2xl font-light mb-2">— About Us</p>
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-medium mb-4 leading-tight">
            Bridging Innovation with IT and Legal Excellence
          </h2>
          <p className="opacity-80 2xl:text-2xl font-light mb-6">
            Volvrit is a one-stop solution for your IT and Legal needs. We
            specialize in IT and Legal services that deliver effective
            implementation and excellent quality to our clients. Our mission is
            to ensure client success through precise and innovative solutions
            while remaining long-term strategists for client relations. The
            vision of the company is to become a prime partner in technological
            and business advancement through the delivery of measured results
            and long-term success.
          </p>
          <button className="bg-white text-primary 2xl:text-2xl hover:bg-primary hover:text-white border transition-all duration-200 ease-in-out border-primary hover:border-white font-semibold px-10 py-2 rounded-full">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-2 lg:ml-8 relative">
          <Image
            src="/assets/home/aboutUs.png"
            alt="About Us Image"
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full rounded-xl object-contain"
          />

          {/* Arrow Decorations */}
          <div className="absolute top-12 left-0 w-20 h-12 bg-primary rounded-r-full z-10"></div>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 -right-10 w-20 h-12 bg-primary rounded-l-full z-10"></div>
          <div className="absolute bottom-12 left-0 w-20 h-12 bg-primary rounded-r-full z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
