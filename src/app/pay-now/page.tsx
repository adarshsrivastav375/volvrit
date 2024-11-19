import Image from "next/image";
import PayNowForm from "./components/PayNowForm";

const images = [
  { width: 100, url: "/assets/logo/services/nextjs.png" },
  { width: 70, url: "/assets/logo/services/blockchain.png" },
  { width: 70, url: "/assets/logo/services/bubble.png" },
  { width: 80, url: "/assets/logo/services/reactjs.png" },
  { width: 90, url: "/assets/logo/services/ios.png" },
  { width: 100, nograyscale: true, url: "/assets/logo/services/aws.png" },
  { width: 120, url: "/assets/logo/services/nodejs.png" },
  { width: 70, url: "/assets/logo/services/group.png" },
  { width: 50, url: "/assets/logo/services/android.png" },
  { width: 90, nograyscale: true, url: "/assets/logo/services/53.png" },
];

export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover pt-28 2xl:pt-40 pb-20 bg-center flex items-center justify-center lg:px-20 2xl:px-28 3xl:px-36 4xl:px-56 5xl:px-64"
      style={{ backgroundImage: "url('/assets/home/banner.jpg')" }} // Change to your background image path
    >
      <div className="p-4 md:p-8 w-full">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 2xl:gap-24 3xl:gap-28 4xl:gap-40">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-5xl md:text-7xl 3xl:text-9xl mb-6 font-medium">
              Get Started
            </h1>
            <p className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-4 font-extralight">
              Partner with Volvit for your next website project. Simply fill out
              the form and tell us about your vision. We&apos;re here to bring
              your ideas into a stunning digital experience.
            </p>
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-6 py-5 px-2 md:px-0 gap-5 md:gap-10 justify-center items-center">
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <Image
                      priority
                      height={100}
                      src={image?.url}
                      width={image?.width}
                      alt={`image-${index}`}
                      className={`w-full ${
                        image?.nograyscale ? "" : "brightness-[.5]"
                      } `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <PayNowForm />
        </div>
      </div>
    </div>
  );
}
