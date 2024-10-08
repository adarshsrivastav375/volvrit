import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Optimize from "@/components/services/saas/Optimize";
import Expertise from "@/components/services/saas/Expertise";
import HeroSection from "@/components/services/saas/HeroSection";
import EasyToTrack from "@/components/services/saas/EasyToTrack";
import SyntheticSurveillance from "@/components/services/saas/Synthetic";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Expertise />
      <Optimize />
      <EasyToTrack />
      <div className="relative text-white max-w-9xl mx-[6vw] rounded-3xl overflow-hidden p-4 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s start growing your business
            </h4>
            <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
              Be ready to create a personalized mobile application that could
              take your business to the next level. Do similar businesses
              require boosting their customer engagement efficiency and growth
              with mobile apps? Contact us today about your project to
              let&apos;s get started building the right mobile app for
              furthering your business goals.
            </p>
            <Link
              href="/contact-us"
              className="py-3 mx-auto justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            >
              <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
              <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <SyntheticSurveillance />
      <div className="bg-[#0B2D52] text-white pt-16 2xl:pt-24 3xl:pt-32">
        <div className="max-w-9xl mx-auto flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-20 2xl:px-40">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold 3xl:text-6xl 4xl:text-7xl mb-4 !leading-snug">
            Your website is your 24/7 sales person. Don&apos;t just settle for
            an ordinary one. Go beyond with Volvrit
          </h2>
          <Link
            href={"/contact-us"}
            className="py-2 2xl:py-5 px-5 2xl:px-10 flex gap-2 w-fit my-5 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl items-center rounded-lg 2xl:rounded-2xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 hover:shadow-2xl text-white text-base transition-all duration-200 ease-in-out"
            aria-label="Contact Us"
          >
            <span>Start a Project</span> <BsArrowRightCircleFill />
          </Link>
          <div className="w-4/5 mx-auto relative">
            <Image
              width={64}
              height={64}
              alt={"Screen"}
              unoptimized
              priority
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-frame1.png"
              className="w-full object-cover"
            />
            <Image
              width={200}
              height={200}
              alt={"Screen"}
              unoptimized
              priority
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-framep1.png"
              className="object-contain absolute top-0  right-0"
            />
            <Image
              width={200}
              height={200}
              unoptimized
              priority
              alt={"Screen"}
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-frame2.png"
              className="object-contain absolute -top-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
