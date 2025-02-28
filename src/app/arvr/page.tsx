import Faq2 from "@/components/common/Faq2";
import StartAProjectButton from "@/components/common/StartAProjectButton";
import Testimonials2 from "@/components/common/Testimonials2";
import VrContact from "@/components/common/VrContact";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";
import type { NextFont } from "next/dist/compiled/@next/font";
import { nunito, poppins } from "@/data/font";



function Arvr() {
  return (
    <>
      <div
        className=" h-auto"
        style={{
          backgroundImage: "url('/assets/home/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex px-5 flex-col  sm:flex-row">
          <div className="flex-1 mt-[6rem] md:mt-[10rem] ">
            <div className="flex justify-center align-middle">
              <Image
                width={1000}
                height={1000}
                alt=""
                src="/assets/arvr/AR VR Hero section.png"
                className="w-auto h-[320px] md:h-[400px] "
              />
            </div>
          </div>
          <div className="flex-1 md:mt-[12rem]  bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-[#99AEFE] to-[#982DEA] ">
            <h1
              className={` ${poppins.variable} font-extrabold mb-4  text-3xl sm:text-2xl  md:text-3xl  md:leading-[3.3rem] `}
            >
              Step into Tomorrow with Augmented and Virtual Reality
            </h1>
            <p className="text-gray-400">
              Augmented Reality (AR) and Virtual Reality (VR) are among the most
              revolutionary technologies changing our world. AR and VR have
              unlimited possibilities to improve the user experience and address
              multifaceted challenges across sectors. For gaming, education,
              property, or healthcare, AR/VR is opening new avenues of
              opportunities.
            </p>
            <div className="mt-5">
              <StartAProjectButton href="#contact" text="Enquiry Now" />
            </div>
          </div>
        </div>
        <div className="container mt-24 mx-auto px-5 lg:p-16 lg:py-20">
          <div className="flex flex-col rounded-lg p-4 lg:p-0  md:h-80 sm:flex-row bg-gradient-to-r from-indigo-950 to-[#00307038] ">
            <div className="flex-none  mt-[2rem]   ">
              <div className="flex justify-center align-middle">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/About us VR glass.png"
                  className="w-auto md:relative top-[-5rem] h-[250px] md:h-[450px] "
                />
              </div>
            </div>
            <div className="flex-1 mt-[2rem] ">
              <h1
                className={`text-3xl text-white  ${poppins.className} font-extrabold  leading-[3.3rem]   `}
              >
                About Us
              </h1>
              <p className="text-gray-400">
                Welcome to our website where innovation has been pioneered in
                the IT services world. Founded in 2023, we have since built a
                strong foundation on technology and excellence grounds,
                consistently innovating through real-time solutions that would
                empower businesses in the complex digital landscape.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" h-auto"
        style={{
          backgroundImage: "url('/assets/home/banner.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 pb-7">
          <div className="">
            <h1 className="text-white text-3xl pt-20 font-extrabold">
              Take a look at our customized services
            </h1>
          </div>

          <div className="flex  flex-col  sm:flex-row">
            <div className="flex-none md:w-[350px] mt-[4rem] ">
              <div className="flex  justify-center align-middle">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/Service AR.png"
                  className="w-auto h-[300px]"
                />
              </div>
            </div>
            <div className="flex-1 mt-[5rem] ">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Virtual Reality
              </h1>
              <p className="text-gray-400">
                Virtual Reality (VR), on the other hand is an entirely immersive
                experience that takes users into a totally digital world. With
                VR headsets, users can simulate virtual environments as if they
                were present, opening up new possibilities for training,
                simulation, entertainment, and beyond.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>

          <div className="flex flex-col  sm:flex-row ">
            <div className="flex-none md:w-[350px] mt-[4rem] ">
              <div className="flex justify-center align-middle ">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/Service VR.png"
                  className="w-auto h-[300px]"
                />
              </div>
            </div>
            <div className="flex-1 mt-[5rem] ">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Augmented reality
              </h1>
              <p className="text-gray-400">
                Augmented Reality (AR) enhances the real world by putting
                virtual things—such as images, sound, or even words—over the
                real world. Unlike Virtual Reality, which puts you totally
                inside a virtual world, AR blends both the digital and real
                worlds together, such that you can interact with virtual things
                within your real world.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        >
          <div className="container mx-auto px-8 lg:px-16 py-14">
            <h1 className="text-white text-3xl font-extrabold text-left mb-10">
              How We Do It
            </h1>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Design */}
              <div className="bg-[#003070] shadow-[5px_5px_0px_0px__rgba(139,92,246,0.25)] p-4 rounded-xl">
                <div className="flex flex-col items-start text-start">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src="/assets/arvr/illustration (1) 1.png"
                    className="w-auto h-16"
                  />
                  <h1 className="text-white mt-4 text-3xl">Design</h1>
                  <p className="text-white mt-4 justify-center line-clamp-9 w-full">
                    We specialize in delivering visually appealing AR/VR designs
                    that engage users. Our designs are user-friendly,
                    interactive, and optimized to achieve client goals,
                    delivering impactful user experiences on all platforms.
                  </p>
                </div>
              </div>

              {/* Develop */}
              <div className="bg-[#003070] shadow-[5px_5px_0px_0px__rgba(139,92,246,0.25)] p-4 rounded-xl">
                <div className="flex flex-col items-start text-left">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src="/assets/arvr/illustration (1) 1-1.png"
                    className="w-auto h-16"
                  />
                  <h1 className="text-white mt-4 text-3xl">Develop</h1>
                  <p className="text-white line-clamp-9 mt-4">
                    Our AR/VR development team delivers scalable and
                    high-performance solutions that incorporate the most
                    advanced technology to deliver smooth, interactive
                    experiences. We prioritize reliability, efficiency, and
                    user-driven designs.
                  </p>
                </div>
              </div>

              {/* Test */}
              <div className="bg-[#003070] shadow-[5px_5px_0px_0px__rgba(139,92,246,0.25)] p-4 rounded-xl">
                <div className="flex flex-col items-start text-left">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src="/assets/arvr/illustration (1) 1-2.png"
                    className="w-auto h-16"
                  />
                  <h1 className="text-white mt-4 text-3xl">Test</h1>
                  <p className="text-white line-clamp-9 mt-4">
                    We conduct thorough testing to make our AR/VR solutions
                    perfect. Our experts find and fix problems, maximizing
                    functionality and user experience to provide
                    high-performance and seamless interactions.
                  </p>
                </div>
              </div>

              {/* Deployment */}
              <div className="bg-[#003070] shadow-[5px_5px_0px_0px__rgba(139,92,246,0.25)] p-4 rounded-xl">
                <div className="flex flex-col items-start text-left">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src="/assets/arvr/illustration (1) 1-3.png"
                    className="w-auto h-16"
                  />
                  <h1 className="text-white mt-4 text-3xl">Deployment</h1>
                  <p className="text-white line-clamp-9 mt-4">
                    Our AR/VR solutions are integrated into your current systems
                    with ease, providing smooth deployment. From installation to
                    launch, we provide efficient implementation and provide
                    effective experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/assets/home/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="">
            <h1 className="text-white text-3xl pt-20 font-extrabold">
              The Future of Innovation and Interaction with AR/VR
            </h1>
          </div>

          <div className="flex flex-col  sm:flex-row ">
            <div className="flex-none md:w-[350px] mt-[4rem] ">
              <div className="flex md:justify-center md:align-middle">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/Rectangle 731.png"
                  className="md:w-auto h-[170px] md:h-[200px]  w-[270px]  "
                />
              </div>
            </div>
            <div className="flex-1 mt-[4rem] ">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Endless Possibilities
              </h1>
              <p className="text-gray-400">
                From changing gaming experience to redefining the way we
                experience the world, AR/VR technologies are unveiling endless
                potential. From virtual exploration to remote learning, or
                cutting-edge advertising, there&apos;s endless potential.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>

          <div className="flex  flex-col  sm:flex-row">
            <div className="flex-none md:w-[350px] mt-[4rem] ">
              <div className="flex md:justify-center md:align-middle">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/Rectangle 732.png"
                  className="md:w-auto h-[170px] md:h-[200px]  w-[270px]"
                />
              </div>
            </div>
            <div className="flex-1 mt-[4rem] ">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Enhanced User Experience
              </h1>
              <p className="text-gray-400">
                AR/VR allows one to do something that would otherwise be
                unthinkable. From getting dressed up in virtual clothes or
                trying out a new product, these technologies allow for an
                immersive, interactive way of experiencing things.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>
          <div className="flex  flex-col  sm:flex-row">
            <div className="flex-none md:w-[350px] mt-[4rem] ">
              <div className="flex md:justify-center md:align-middle">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/Rectangle 731-1.png"
                  className="md:w-auto h-[170px] md:h-[200px]  w-[270px]"
                />
              </div>
            </div>
            <div className="flex-1 mt-[4rem] ">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Increased Efficiency
              </h1>
              <p className="text-gray-400">
                These technologies already supplement training procedures with
                employees honing their skills in virtual duplicates without
                concerns about real-time repercussions. For example, students
                can practice surgery in virtual environments, while employees
                can practice driving advanced equipment with AR.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growing Role of AR/VR in Industries */}
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/assets/home/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="container mx-auto px-6 lg:p-16">
          <div className="">
            <h1 className="text-white text-3xl pt-20 font-extrabold">
              The Growing Role of AR/VR{" "}
            </h1>
          </div>
          {[
            {
              title: "In Education",
              description:
                "AR and VR are transforming education by delivering engaging learning experiences. Students can now virtually visit historical places, study complex ideas with interactive simulations, and even have hands-on practice without entering a lab.",
              image: "/assets/arvr/ar.png",
            },
            {
              title: "In Healthcare",
              description:
                "Medical professionals and doctors employ AR/VR for training, virtual surgery, and simulation of patient care. AR assists doctors in visualizing medical data in real-time, whereas VR delivers immersive settings for therapy and rehabilitation.",
              image: "/assets/arvr/ar1.png",
            },
            {
              title: "In Retail and Marketing",
              description:
                "AR and VR are also transforming the way brands engage with customers. Virtual stores enable customers to test products before purchasing, making the shopping experience more intimate. AR enables consumers to view how products, such as clothing or furniture, would appear in their homes prior to purchase.",
              image: "/assets/arvr/ar2.png",
            },
            {
              title: "In Entertainment and Gaming",
              description:
                "VR has revolutionized gaming by enabling gamers to be fully immersed in an interactive, 3D environment. In the same way, AR-based games such as Pokemon Go are merging the virtual and real worlds to create immersive outdoor experiences.",
              image: "/assets/arvr/ar3.png",
            },
          ].map((data, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } `}
            >
              <div className="flex-none md:w-[350px] mt-[4rem]">
                <div className="flex md:justify-center md:align-middle">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={data?.image || "/assets/arvr/Rectangle 731.png"}
                    className="md:w-auto h-[170px] md:h-[200px]  w-[270px]  "
                  />
                </div>
              </div>
              <div
                className={`flex-1 mt-[4rem]  ${
                  index % 2 === 0 ? "pl-4" : ""
                } `}
              >
                <h1
                  className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]`}
                >
                  {data?.title}
                </h1>
                <p className="text-gray-400">{data?.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:p-16 ">
          <div className="flex flex-col  sm:flex-row bg-[#003070] rounded-md ">
            <div className="flex flex-col p-8 items-start justify-center">
              <h1
                className={`text-3xl text-white  ${nunito.className} font-extrabold  leading-[3.3rem]   `}
              >
                Explore product in new way{" "}
              </h1>
              <p className="text-gray-400">
                We specialize in creating visual identities for products and
                brands in your company.
              </p>
              <div className="mt-5">
                <StartAProjectButton href="#contact" text="Enquiry Now" />
              </div>
            </div>
            <div className="flex-non">
              <div className="">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/assets/arvr/explore.png"
                  className="w-auto object-cover h-full "
                />
              </div>
            </div>
          </div>
        </div>

        <Faq2 />

        <Testimonials2 />

        <VrContact />
      </div>
    </>
  );
}

export default Arvr;
