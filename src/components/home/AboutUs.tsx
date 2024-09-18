import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-20">
      <div className="bg-primary rounded-3xl lg:p-16 text-white relative flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <p className="text-sm font-light mb-2">— About Us</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
            Bridging Innovation with IT and Tax Excellence
          </h2>
          <p className="opacity-80 font-light mb-6">
            Volvrit is a one-stop solution for your tech and tax needs. We
            specialize in IT and tax services that deliver effective
            implementation and excellent quality to our clients. Our mission is
            to ensure client success through precise and innovative solutions
            while remaining long-term strategists for client relations.
          </p>
          <p className="opacity-80 font-light mb-6">
            The vision of the company is to become a prime partner in
            technological and business advancement through the delivery of
            measured results and long-term success.
          </p>
          <button className="bg-white text-primary hover:bg-primary hover:text-white border transition-all duration-200 ease-in-out border-primary hover:border-white font-semibold px-10 py-2 rounded-full">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 relative">
          <Image
            src="/assets/home/aboutUs.png" // Replace with your actual image
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
