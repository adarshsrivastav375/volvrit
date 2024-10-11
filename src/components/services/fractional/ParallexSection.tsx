"use client";
import StartAProjectButton from "@/components/common/StartAProjectButton";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && contentRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.clientHeight;
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (sectionTop >= 0 && sectionTop <= windowHeight) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }

        if (isInView) {
          // Calculate scroll offset within the section
          const sectionOffsetTop =
            window.scrollY - sectionRef.current.offsetTop;
          const sectionScrollHeight = sectionHeight - windowHeight;
          const scrollPercentage = sectionOffsetTop / sectionScrollHeight;

          // Translate content based on scroll within section bounds
          const translateY =
            scrollPercentage *
            (sectionHeight - contentRef.current.clientHeight);
          contentRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative hidden lg:block h-fit w-full overflow-hidden"
    >
      {/* Background Image with black overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://volvrit.s3.ap-south-1.amazonaws.com/ctobanner2.png"
          alt="Background Image"
          unoptimized
          priority
          width={100}
          height={100}
          className="z-0 w-full"
        />
        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      </div>

      <div className="flex justify-center max-w-9xl mx-auto px-4 md:px-6 lg:px-[10vw] items-center gap-20">
        <div className="w-2/5 relative mb-[110vh] z-40">
          <h1 className="text-6xl 2xl:text-7xl 3xl:text-9xl text-white relative z-20 font-bold mb-8">
            Who Can Benefit from a Fractional CTO?
          </h1>
          <StartAProjectButton />
        </div>
        {/* Parallax scrolling content */}
        <div
          ref={contentRef}
          className="relative z-20 text-black ml-auto w-3/5 bg-white h-full flex flex-col justify-center items-center"
          style={{
            transform: "translateY(0px)", // Start centered
            transition: "transform 0.1s ease-out", // Smooth scrolling effect
          }}
        >
          <div className="max-w-3xl space-y-6 p-10">
            <div>
              <h2 className="text-3xl mb-5 font-semibold">1. Startups</h2>
              <p className="text-lg">
                Early-stage startups would face technical challenges during
                early growth stages but may lack the resources to hire a
                full-time CTO. A Fractional CTO provides the technical expertise
                needed to build and scale products, while also helping startups
                secure funding by presenting a solid tech strategy to investors.
                Additionally, it also makes the operations lighter by ensuring
                that the tech infrastructure of the startup is secure and
                scalable so that the business can grow fast without hitting
                bottlenecks or setbacks caused by technology.
              </p>
            </div>

            <div>
              <h2 className="text-3xl mb-5 font-semibold">
                2. Small to Mid-Sized Businesses (SMBs)
              </h2>
              <p className="text-lg">
                SMBs often experience rapid growth, which can lead to technology
                outpacing their internal expertise. When the in-house teams can
                no longer handle the increasing demands for tech, a Fractional
                CTO comes in to provide scalable support to help implement the
                right technologies and processes to keep up with the growth
                efficiently so that the business will not fall short against
                market demands. The services are cost-effective because they
                provide high-level technical leadership without the need for a
                full-time expensive CTO for SMBs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl mb-5 font-semibold">
                3. Non-Tech Founders
              </h2>
              <p className="text-lg">
                Non-technical founders may struggle to bridge the gap between
                their business vision and the technical requirements needed to
                achieve it. A Fractional CTO would guide by talking about
                complicated tech concepts in easy-to-understand terms and ensure
                that the business is making informed strategic technical
                decisions. Through vendor selection, managing technical teams,
                and system architecture, the Fractional CTO helps the non-tech
                founder concentrate more on their core business activities while
                ensuring that the technology side aligns with this goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
