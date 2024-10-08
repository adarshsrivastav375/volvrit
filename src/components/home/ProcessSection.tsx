// "use client";

// import { useRef } from "react";
import Image from "next/image";
// import { motion, useInView } from "framer-motion";
// import ConcentricCircles from "./ConcentricCircle";
// import { BsArrowRightCircleFill } from "react-icons/bs";

// // Animation Variants for Framer Motion
// const textVariant = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//       staggerChildren: 0.05, // Stagger for each letter
//     },
//   },
// };

// const letterVariant = {
//   hidden: { opacity: 0, x: -10 },
//   visible: { opacity: 1, x: 0 },
// };

// const AnimatedText = ({ text }: { text: string }) => (
//   <motion.div
//     variants={textVariant}
//     initial="hidden"
//     whileInView="visible"
//     className="inline-flex"
//   >
//     {text.split("").map((letter, idx) => (
//       <motion.span
//         key={idx}
//         className="text-xs md:text-xl lg:text-2xl border-b-2 3xl:border-b-4 border-b-red-500 pb-2 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-semibold"
//         variants={letterVariant}
//       >
//         {letter}
//       </motion.span>
//     ))}
//   </motion.div>
// );

const ProcessSection: React.FC = () => {
  // Refs for each section
  // const processRef = useRef(null);
  // const isInView = useInView(processRef, { once: true }); // Animate only once when in view

  return (
    <>
      {/* <div className="relative lg:h-screen">
        <Image
          src="/assets/home/bg.png"
          width={100}
          height={100}
          alt="First Image"
          unoptimized
          priority
          className="w-full lg:h-screen relative z-10" // Add a margin at the bottom of the first image
        />
        <div>
          <Image
            src="/assets/logo/movingicon.png" // Change to your second image path
            width={100}
            height={100}
            alt="Second Image"
            unoptimized
            priority
            className="absolute top-0 left-0 right-0 w-full flex justify-center items-start mx-auto lg:h-screen"
          />
        </div>
        <div className="absolute inset-0 -top-[14vw] md:-top-[20vw] lg:-top-[5vw] w-full lg:h-screen flex flex-col justify-center gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-tr 2xl:text-2xl from-black via-primary to-black text-white text-sm md:text-xl font-bold w-[20vw] md:w-[25vw] lg:w-[10vw] 2xl:w-[20vw] 4xl:w-[15vw] 3xl:text-6xl 4xl:text-7xl flex justify-center items-center aspect-square rounded-full shadow-lg"
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
            <div className="absolute left-4 md:left-3 2xl:left-6 bottom-11 md:bottom-16 2xl:bottom-20 w-8 md:w-16 h-[1px] md:h-[2px] bg-red-500 -rotate-90" />

            <div className="absolute -left-[5vw] md:-left-[10vw] lg:-left-[12vw] 3xl:-left-[15vw] -bottom-4 md:-bottom-[5vw] lg:-bottom-[5vw] w-[8vw] md:w-[12vw] lg:w-[13vw] 3xl:w-[15vw] h-[1px] md:h-[2px] bg-red-500 -rotate-[30deg]" />
            <div className="absolute -left-[5vw] md:-left-[10vw] lg:-left-[12vw] 3xl:-left-[15vw] -top-4 md:-top-[5vw] lg:-top-[5vw] w-[8vw] md:w-[12vw] lg:w-[13vw] 3xl:w-[15vw] h-[1px] md:h-[2px] bg-red-500 rotate-[30deg]" />
            <div className="absolute -right-[5vw] md:-right-[10vw] lg:-right-[12vw] 3xl:-right-[15vw] -top-4 md:-top-[5vw] lg:-top-[5vw] w-[8vw] md:w-[12vw] lg:w-[13vw] 3xl:w-[15vw] h-[1px] md:h-[2px] bg-red-500 -rotate-[30deg]" />
            <div className="absolute -right-[5vw] md:-right-[10vw] lg:-right-[12vw] 3xl:-right-[15vw] -bottom-4 md:-bottom-[5vw] lg:-bottom-[5vw] w-[8vw] md:w-[12vw] lg:w-[13vw] 3xl:w-[15vw] h-[1px] md:h-[2px] bg-red-500 rotate-[30deg]" />

            <div className="absolute -left-[30vw] md:-left-[35vw] lg:-left-[30vw] 3xl:-left-[35vw] -bottom-[7vw] md:-bottom-[8vw] lg:-bottom-[8vw]">
              <AnimatedText text="Development" />
            </div>
            <div className="absolute -left-[30vw] md:-left-[35vw] lg:-left-[30vw] 3xl:-left-[35vw] -top-[13vw] md:-top-[12vw] lg:-top-[11vw]">
              <AnimatedText text="User Research" />
            </div>
            <div className="absolute -right-[30vw] md:-right-[35vw] lg:-right-[30vw] 3xl:-right-[35vw] -top-[14vw] md:-top-[13vw] lg:-top-[11vw]">
              <AnimatedText text="UI/UX Design" />
            </div>
            <div className="absolute -right-[23vw] md:-right-[29vw] lg:-right-[26vw] 3xl:-right-[30vw] -bottom-[7vw] md:-bottom-[9vw] lg:-bottom-[8vw]">
              <AnimatedText text="Testing" />
            </div>
          </div>
        </div>
        <div className="text-center hidden md:block absolute bottom-4 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-2 2xl:py-4 px-5 w-fit mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span>Start a Project</span> <BsArrowRightCircleFill />
          </motion.div>
        </div>
      </div> */}

      <div className="mx-auto max-w-9xl lg:px-40 2xl:px-40 md:px-8 px-4">
        <div className="text-center pt-10 3xl:pt-16 4xl:pt-28">
          <h4 className="text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold pb-2">
            Tackling complex integrations?
          </h4>
          <p className="text-lg 2xl:text-2xl md:w-2/3 mx-auto 3xl:text-3xl 4xl:text-4xl">
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
          className="w-full md:w-2/3 2xl:w-1/2 my-10 lg:mt-20 mx-auto h-auto"
        />
        {/* <ConcentricCircles /> */}
      </div>
    </>
  );
};

export default ProcessSection;
