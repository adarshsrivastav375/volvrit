import Image from "next/image";

export const trustedClient = [
  {
    id: 1,
    imageUrl: "/assets/logo/affinity.png",
    width: 200,
    height: 200,
    title: "Affinity Logo",
  },
  {
    id: 5,
    imageUrl: "/assets/logo/intense.png",
    width: 200,
    height: 200,
    title: "Intense Logo",
  },
  {
    id: 8,
    imageUrl: "/assets/logo/unfazed.png",
    width: 200,
    height: 200,
    title: "Unfazed Logo",
  },
  {
    id: 4,
    imageUrl: "/assets/logo/fitness.png",
    width: 200,
    height: 200,
    title: "Fitness Logo",
  },
  {
    id: 2,
    imageUrl: "/assets/logo/bookswagon.png",
    width: 200,
    height: 200,
    title: "Books Wagon Logo",
  },
  {
    id: 3,
    imageUrl: "/assets/logo/dheer.png",
    width: 200,
    height: 200,
    title: "Dheer Logo",
  },
  {
    id: 6,
    imageUrl: "/assets/logo/keintchi.png",
    width: 200,
    height: 200,
    title: "Keintchi Logo",
  },
  {
    id: 7,
    imageUrl: "/assets/logo/Kingsmen.png",
    width: 200,
    height: 200,
    title: "Kingsmen Logo",
  },
  {
    id: 9,
    imageUrl: "/assets/logo/unificars.png",
    width: 200,
    height: 200,
    title: "Unificars Logo",
  },
  {
    id: 10,
    imageUrl: "/assets/logo/woodheaven.png",
    width: 200,
    height: 200,
    title: "Wood Heaven Logo",
  },
  {
    id: 11,
    imageUrl: "/assets/logo/zresh.png",
    width: 200,
    height: 200,
    title: "Zresh Logo",
  },
  {
    id: 12,
    imageUrl: "/assets/logo/excellence.png",
    width: 200,
    height: 200,
    title: "excellence Logo",
  },
];

const OurPartners = () => {
  return (
    <div className="relative container mx-auto py-8 md:pt-10 pb-6 px-4 md:px-6 lg:px-20 text-center">
      {/* <video
        className="absolute inset-0 opacity-5 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/video/home/ourpartner.mp4"
        poster="/assets/video/home/ourpartner.mp4#t=0.1"
      /> */}
      <h5 className="relative text-2xl md:text-4xl mb-2 col-span-2 font-semibold z-10 text-black">
        A few companies who trusted <br />
        us with their projects
      </h5>
      <div className="relative grid grid-cols-3 md:grid-cols-4 gap-10 pt-5 overflow-auto md:gap-0 justify-center items-center z-10">
        <>
          {trustedClient.map((trust, idx) => {
            return (
              <div key={idx} className="mb-5">
                <Image
                  priority
                  alt={trust?.title}
                  width={trust?.width}
                  src={trust?.imageUrl}
                  height={trust?.height}
                  className="w-fit 2xl:w-48 mx-auto object-contain"
                />
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default OurPartners;
