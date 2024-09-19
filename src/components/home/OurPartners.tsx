import Image from "next/image";

export const trustedClient = [
  {
    id: 1,
    imageUrl: "/assets/logo/fitness2.png",
    width: 200,
    height: 200,
    title: "Books Wagon Logo",
  },
  {
    id: 1,
    imageUrl: "/assets/logo/unificars2.png",
    width: 300,
    height: 100,
    title: "Unifi Cars Logo",
  },
  {
    id: 1,
    imageUrl: "/assets/logo/affinity2.png",
    width: 300,
    height: 300,
    title: "Affinity Logo",
  },
  {
    id: 1,
    imageUrl: "/assets/logo/unfazed2.png",
    width: 200,
    height: 100,
    title: "Unfazed Logo",
  },
  {
    id: 1,
    imageUrl: "/assets/logo/bookswagon2.png",
    width: 100,
    height: 100,
    title: "Books Wagon Logo",
  },
];

const OurPartners = () => {
  return (
    <div className="container mx-auto py-8 md:py-12 pb-6 px-4 md:px-6 lg:px-20 text-center">
      <h5 className="text-2xl md:text-4xl mb-2 col-span-2 font-semibold">Our Clients</h5>
      <div className="grid grid-cols-3 gap-2 mg:gap-0 md:grid-cols-5 justify-center items-center">
        <>
          {trustedClient.map((trust: any, idx: any) => {
            return (
              <div key={idx}>
                <Image
                  priority
                  alt={trust?.title}
                  layout="intrinsic"
                  width={trust?.width}
                  src={trust?.imageUrl}
                  height={trust?.height}
                  className="w-fit mx-auto object-contain"
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
