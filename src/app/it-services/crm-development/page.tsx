import Link from "next/link";
import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Testimonials from "@/components/home/Testimonials";
import CRMBenefits from "@/components/services/crm/CRMBenefits";
import BackgroundImage from "@/components/common/BackgroundImage";
import CRMSolutions from "@/components/services/crm/CRMSolutions";
import ExtraBenefits from "@/components/services/crm/ExtraBenefits";
import CRMDevelopmentBanner from "@/components/services/crm/CRMDevelopmentBanner";

export default function Page() {
  return (
    <>
      <div className="pt-8 md:pt-20 lg:pt-24">
        <CRMDevelopmentBanner />
      </div>
      <div className="container mx-auto lg:px-20 flex flex-col justify-center items-center text-center">
        <BackgroundImage imageUrl="/assets/banners/shape.png">
          <div className="lg:h-[60vh] pt-5 lg:py-0 flex flex-col justify-center items-center">
            <h3 className="inline text-2xl md:text-4xl md:font-light">
              Your{" "}
              <span className="font-semibold text-primary">
                Customer Relationship
              </span>{" "}
              <br />
              <span>through Digital Transformation</span>
            </h3>
            <p className="lg:w-1/2 mx-auto py-5 md:text-lg font-light leading-6">
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
              {/* <Link
                href={"tel:+01998989289"}
                className="py-[6px] px-4 rounded-lg bg-white text-primary border border-primary text-sm transition-all ease-in-out"
                aria-label="Phone number"
              >
                View Portfolio
              </Link> */}
            </div>
          </div>
        </BackgroundImage>
      </div>
      <CRMSolutions />
      <CRMBenefits />
      <ExtraBenefits />
      <Trusted />
      <OurPartners />
      <Testimonials />
      <BackgroundImage>
        <div className="h-fit py-5 md:py-16 lg:py-0 lg:h-[85vh] text-black flex flex-col justify-center items-center">
          <h4 className="text-xl md:text-5xl mb-3 md:mb-7 font-extralight">
            Go ahead and discuss your <br />
            <strong className="font-semibold">project with us</strong>
          </h4>
          <Link
            href={"tel:+01998989289"}
            className="py-1 md:py-3 px-2 md:px-6 rounded-lg bg-primary hover:bg-primary/80 text-white transition-all text-sm md:text-lg ease-in-out"
            aria-label="Phone number"
          >
            Get Started
          </Link>
        </div>
      </BackgroundImage>
    </>
  );
}
