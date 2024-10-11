import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-[15vh] md:pt-[15vh] lg:pt-[25vh]">
        <div className="text-center">
          <div className="flex justify-center mx-auto items-center gap-5">
            <Image
              width={110}
              height={110}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/shoppingbag.png"
              className="w-full md:w-fit h-fit object-contain"
            />
            <h4 className="text-xl text-left md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-medium">
              Unlock the Full Potential of Shopify{" "}
              <br className="hidden md:block" /> with Expert Development
              Services
            </h4>
          </div>
          <p className="text-base font-extralight md:w-4/5 mt-4 px-4 md:px-0 mx-auto mb-6">
            At Volvrit, we specialize in crafting custom Shopify solutions that
            elevate your ecommerce store, no matter the size or complexity of
            your business. Our experienced developers and Shopify experts will
            help you build, customize, and optimize your store to create a
            seamless shopping experience that drives conversions and growth.
          </p>
          <StartAProjectButton marginBottom="mb-16 md:mb-10" />
          <div className="w-full relative flex flex-col items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/MacbookAir3z10.png"
              className="w-fit h-full z-20 absolute top-0 left-10 object-contain"
            />
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/MacbookAir3.png"
              className="w-4/5 relative h-full object-contain"
            />
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-3xl shadow-2xl bg-[#0051B3]/70 md:bg-[#0051B3] absolute -top-10 rotate-6 right-1/4"></div>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl shadow-2xl bg-[#0051B3]/70 md:bg-[#0051B3] absolute top-1/2 -rotate-12 left-0"></div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-3xl shadow-2xl bg-[#0051B3]/70 md:bg-[#0051B3] absolute -top-1/4 -rotate-12 left-0"></div>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-3xl shadow-2xl bg-[#1F1F2D] border-y border-y-slate-100 absolute -top-1/4 rotate-12 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
