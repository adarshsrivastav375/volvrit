import Image from "next/image";
import React from "react";

export default function TesomoniallConnect() {
  return (
    <div className="bg-white py-12 h-[100rem] lg:h-[50rem]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Testimonials
        </h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          We always deploy and use the world’s most powerful technology
          platforms and software for developing and launching Android apps. This
          is the reason that our Android app development services are always one
          step ahead of our competitors, ensuring stunning success for our
          clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-[25rem] pt-5">
          <div className="h-[25rem]">
            <span className="relative w-[20rem] top-12 inline-block">
              <Image
                src="/assets/banners/testimonial_card_2.png"
                width={1300}
                height={900}
                alt="Google Logo"
                className="object-fill h-96 "
              />
            </span>

            <div className=" text-center relative p-10 px-20 lg:left-[-1rem] top-[-17rem] z-20">
              <h3 className="text-xl font-semibold text-gray-900">
                Ravi Sharma
              </h3>
              <p className="text-gray-500">CEO</p>
              <Image
                src={"/assets/banners/quote.svg"}
                alt="quote"
                width={25}
                height={25}
                className="m-auto"
              />
              <p className=" text-xs text-gray-600">
                “The technical know-how of the team at Volvrit is nothing short
                of fantastic. They delivered a feature-rich, easy-to-use Android
                application that helped turn the fortunes for our company
                around.”
              </p>
            </div>
          </div>
          <div className="h-[25rem]">
            <span className="relative w-[22rem] lg:w-[25rem] lg:left-[-2rem] inline-block">
              <Image
                src="/assets/banners/testimonial_card.png"
                width={1300}
                height={900}
                alt="Google Logo"
                className="object-fill h-[28rem] "
              />
            </span>

            <div className=" text-center relative py-5 px-10 top-[-21rem] lg:left-[-2rem]  z-20">
              <h3 className="text-xl font-semibold text-gray-900">
                Anjali Gupta
              </h3>
              <p className="text-gray-500">Product Manager</p>

              <Image
                src={"/assets/banners/quote.svg"}
                alt="quote"
                width={25}
                height={25}
                className="m-auto"
              />

              <p className="mt-4 text- text-gray-700">
                Volvrit brought our app idea to reality through creativity and
                cutting-edge technology. The team really did outperform our
                expectations with a bug-free, scalable solution delivered right
                on time.
              </p>
            </div>
          </div>
          <div className="h-[25rem]">
            <span className="relative w-[20rem] top-12 inline-block">
              <Image
                src="/assets/banners/testimonial_card_3.png"
                width={1300}
                height={900}
                alt="Google Logo"
                className="object-fill h-96 "
              />
            </span>

            <div className=" text-center relative p-10 px-20 top-[-17.3rem] left-[-1rem] lg:left-[-2.5rem]  z-20">
              <h3 className="text-xl font-semibold text-gray-900">
                Vikram Patel
              </h3>
              <p className="text-gray-500">Co-founder</p>
              <Image
                src={"/assets/banners/quote.svg"}
                alt="quote"
                width={25}
                height={25}
                className="m-auto"
              />
              <p className="mt-0 text-xs text-gray-600">
                “The team of Volvrit hears its clients and makes solutions
                according to their needs. The people there go out of the way to
                make sure that the final output meets the expectations of the
                client.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
