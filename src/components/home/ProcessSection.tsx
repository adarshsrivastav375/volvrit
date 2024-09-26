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
        className="text-2xl font-semibold"
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
            className="absolute top-0 left-0 right-0 w-[90%] flex justify-center items-start mx-auto h-auto transform translate-y-10"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div className="absolute inset-0 w-full h-screen flex flex-col justify-center gap-20 items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-tr from-black via-primary to-black text-white text-xl font-bold w-32 flex justify-center items-center aspect-square rounded-full shadow-lg"
          >
            Process
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center text-2xl font-bold"
            >
              Deploy
            </motion.div>
            <div className="absolute left-3 bottom-16 w-16 h-[2px] bg-red-500 -rotate-90" />

            <div className="absolute -left-48 -bottom-16 w-36 h-[2px] bg-red-500 -rotate-[30deg]" />
            <div className="absolute -left-48 -top-16 w-36 h-[2px] bg-red-500 rotate-[30deg]" />
            <div className="absolute -right-48 -top-16 w-36 h-[2px] bg-red-500 -rotate-[30deg]" />
            <div className="absolute -right-48 -bottom-16 w-36 h-[2px] bg-red-500 rotate-[30deg]" />

            <div className="absolute -left-[424px] -bottom-[99px] w-52 h-[2px] bg-red-500">
              <span className="relative bottom-7">
                <AnimatedText text="Development" />
              </span>
            </div>
            <div className="absolute -left-[424px] -top-[99px] w-52 h-[2px] bg-red-500">
              <span className="relative bottom-7">
                <AnimatedText text="User Research" />
              </span>
            </div>
            <div className="absolute -right-[424px] -top-[99px] w-52 h-[2px] bg-red-500">
              <span className="relative bottom-7">
                <AnimatedText text="UI/UX Design" />
              </span>
            </div>
            <div className="absolute -right-[424px] -bottom-[99px] w-52 h-[2px] bg-red-500">
              <span className="relative bottom-7">
                <AnimatedText text="Testing" />
              </span>
            </div>
          </div>
        </div>
        <div className="text-center absolute bottom-4 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="py-2 px-5 w-fit mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 text-white text-base 2xl:text-lg transition-all duration-200 ease-in-out"
          >
            <span>Start a Project</span> <BsArrowRightCircleFill />
          </motion.div>
          <h4 className="text-3xl font-bold pb-2">
            Tackling complex integrations?
          </h4>
          <p className="text-base w-2/3 mx-auto">
            From intricate challenges to seamless execution, We&apos;ll
            integrate all your marketing tools and automations with your website
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-8xl lg:px-40 2xl:px-40 md:px-8 px-4">
        <Image
          src="/assets/logo/groupICONs.png"
          width={100}
          height={100}
          alt="Figma"
          unoptimized
          priority
          className="w-2/3 2xl:w-4/5 mb-10 mt-20 mx-auto h-auto"
        />
      </div>
    </>
  );
};

export default ProcessSection;
