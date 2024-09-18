import Link from "next/link";
import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import BackgroundImage from "@/components/common/BackgroundImage";
import WhyChooseUs from "@/components/services/digital/WhyChooseUs";
import UniqueFeature from "@/components/services/digital/UniqueFeature";
import AchievingSuccess from "@/components/services/digital/AchievingSuccess";
import DigitalMarketingBanner from "@/components/services/digital/DigitalMarketingBanner";

export default function Page() {
  return (
    <>
      <div className="lg:pt-24">
        <DigitalMarketingBanner />
      </div>
      <div className="container mx-auto lg:px-20 flex flex-col justify-center items-center text-center">
        <BackgroundImage imageUrl="/assets/banners/shape.png">
          <div className="h-[60vh] flex flex-col justify-center items-center">
            <h3 className="inline text-4xl font-light">
              Your{" "}
              <span className="font-semibold text-primary">
                Customer Relationship
              </span>{" "}
              <br />
              <span>through Digital Transformation</span>
            </h3>
            <p className="w-1/2 mx-auto py-5 text-lg font-light leading-6">
              From concept to launch, we bring your digital ideas to life with
              tailored web solutions that elevate your brand and engage your
              audience.
            </p>
            <div className="flex gap-5 justify-center items-center">
              <Link
                href={"tel:+01998989289"}
                className="py-2 px-4 rounded-lg bg-primary hover:bg-primary/80 text-white text-sm transition-all ease-in-out"
                aria-label="Phone number"
              >
                Get Started
              </Link>
              <Link
                href={"tel:+01998989289"}
                className="py-[6px] px-4 rounded-lg bg-white text-primary border border-primary text-sm transition-all ease-in-out"
                aria-label="Phone number"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <UniqueFeature />
      <WhyChooseUs />
      <AchievingSuccess />
      <Trusted />
      <OurPartners />
      <BackgroundImage>
        <div className="h-[85vh] text-black flex flex-col justify-center items-center">
          <h4 className="text-5xl mb-7 font-extralight">
            Go ahead and discuss your <br />
            <strong className="font-semibold">project with us</strong>
          </h4>
          <Link
            href={"tel:+01998989289"}
            className="py-3 px-6 rounded-lg bg-primary hover:bg-primary/80 text-white transition-all text-lg ease-in-out"
            aria-label="Phone number"
          >
            Get Started
          </Link>
        </div>
      </BackgroundImage>
    </>
  );
}
