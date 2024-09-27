"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";

// Animation Variants for Framer Motion
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.05, // Stagger for each letter
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedText = ({ text }: { text: string }) => (
  <motion.div
    variants={textVariant}
    initial="hidden"
    whileInView="visible"
    className="inline-flex"
  >
    {text.split("").map((letter, idx) => (
      <motion.span
        key={idx}
        className="text-xs md:text-xl lg:text-2xl 2xl:text-3xl font-semibold"
        variants={letterVariant}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
);

const ProcessSection: React.FC = () => {
  // Refs for each section
  const processRef = useRef(null);
  const isInView = useInView(processRef, { once: true }); // Animate only once when in view

  return (
    <>
      <div className="relative">
        <Image
          src="/assets/home/bg.png"
          width={100}
          height={100}
          alt="First Image"
          unoptimized
          priority
          className="w-full h-auto relative z-10" // Add a margin at the bottom of the first image
        />
        <div>
          <Image
            src="/assets/logo/movingicon.png" // Change to your second image path
            width={100}
            height={100}
            alt="Second Image"
            unoptimized
            priority
            className="absolute top-0 left-0 right-0 w-full md:w-4/5 lg:w-[90%] flex justify-center items-start mx-auto h-auto transform translate-y-10"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div className="absolute inset-0 md:right-0 md:left-0 md:top-5 lg:inset-0 w-full lg:h-screen flex flex-col justify-center gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-tr 2xl:text-2xl from-black via-primary to-black text-white text-sm md:text-xl font-bold w-20 md:w-32 2xl:w-48 flex justify-center items-center aspect-square rounded-full shadow-lg"
          >
            Process
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-lg md:text-2xl 2xl:text-4xl font-bold"
            >
              Deploy
            </motion.div>
            <div className="absolute left-4 md:left-3 2xl:left-6 bottom-11 md:bottom-16 2xl:bottom-20 w-8 md:w-16 h-[2px] bg-blue-500 -rotate-90" />

            <div className="absolute -left-10 md:-left-36 lg:-left-48 -bottom-4 md:-bottom-12 lg:-bottom-16 w-8 md:w-28 lg:w-36 h-[2px] bg-blue-500 -rotate-[45deg]" />
            <div className="absolute -left-10 md:-left-36 lg:-left-48 -top-4 md:-top-12 lg:-top-16 w-8 md:w-28 lg:w-36 h-[2px] bg-blue-500 rotate-[30deg]" />
            <div className="absolute -right-10 md:-right-36 lg:-right-48 -top-4 md:-top-12 lg:-top-16 w-8 md:w-28 lg:w-36 h-[2px] bg-blue-500 -rotate-[30deg]" />
            <div className="absolute -right-10 md:-right-36 lg:-right-48 -bottom-4 md:-bottom-12 lg:-bottom-16 w-8 md:w-28 lg:w-36 h-[2px] bg-blue-500 rotate-[30deg]" />

            <div className="absolute -left-[125px] md:-left-[310px] lg:-left-[424px] -bottom-[26px] md:-bottom-[76px] lg:-bottom-[99px] w-20 md:w-40 lg:w-52 2xl:w-56 h-[2px] bg-blue-500">
              <span className="relative bottom-7 2xl:bottom-10">
                <AnimatedText text="Development" />
              </span>
            </div>
            <div className="absolute -left-[125px] md:-left-[310px] lg:-left-[424px] -top-[26px] md:-top-[76px] lg:-top-[99px] w-20 md:w-40 lg:w-52 2xl:w-56 h-[2px] bg-blue-500">
              <span className="relative bottom-7 2xl:bottom-10">
                <AnimatedText text="User Research" />
              </span>
            </div>
            <div className="absolute -right-[125px] md:-right-[310px] lg:-right-[424px] -top-[26px] md:-top-[76px] lg:-top-[99px] w-20 md:w-40 lg:w-52 2xl:w-56 h-[2px] bg-blue-500">
              <span className="relative bottom-7 2xl:bottom-10">
                <AnimatedText text="UI/UX Design" />
              </span>
            </div>
            <div className="absolute -right-[125px] md:-right-[310px] lg:-right-[424px] -bottom-[26px] md:-bottom-[76px] lg:-bottom-[99px] w-20 md:w-40 lg:w-52 2xl:w-56 h-[2px] bg-blue-500">
              <span className="relative bottom-7 2xl:bottom-10">
                <AnimatedText text="Testing" />
              </span>
            </div>
          </div>
        </div>
        <div className="text-center hidden md:block absolute bottom-4 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="py-2 2xl:py-4 px-5 w-fit mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span>Start a Project</span> <BsArrowRightCircleFill />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-9xl lg:px-40 2xl:px-40 md:px-8 px-4">
        <div className="text-center pt-10 3xl:pt-16 4xl:pt-28">
          <h4 className="text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold pb-2">
            Tackling complex integrations?
          </h4>
          <p className="text-base 2xl:text-xl md:w-2/3 mx-auto 3xl:text-2xl 4xl:text-3xl">
            From intricate challenges to seamless execution, We&apos;ll
            integrate all your marketing tools and automations with your website
          </p>
        </div>
        <Image
          src="/assets/logo/groupICONs.png"
          width={100}
          height={100}
          alt="Figma"
          unoptimized
          priority
          className="w-full md:w-2/3 2xl:w-4/5 my-10 lg:mt-20 mx-auto h-auto"
        />
      </div>
    </>
  );
};

export default ProcessSection;
