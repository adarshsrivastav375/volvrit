import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const BlockchainBenefits: React.FC = () => {
  const services = [
    {
      title: "Blockchain Consulting",
      description:
        "Expert guidance on implementing blockchain technology for your business.",
      link: "/blockchain-consulting", // Add your link here
    },
    {
      title: "Custom Blockchain Development",
      description:
        "Tailored blockchain solutions to meet your specific business needs.",
      link: "/custom-blockchain-development", // Add your link here
    },
    {
      title: "Smart Contract Development",
      description:
        "Developing reliable smart contracts to automate business processes.",
      link: "/smart-contract-development", // Add your link here
    },
    {
      title: "Decentralized Application (dApp) Development",
      description:
        "Building robust dApps that leverage the power of blockchain.",
      link: "/decentralized-application-development", // Add your link here
    },
    {
      title: "Decentralized Application (dApp) Development",
      description:
        "Creating decentralized applications for improved user trust and transparency.",
      link: "/decentralized-application-development", // Add your link here
    },
    {
      title: "Cryptocurrency Development",
      description: "End-to-end solutions for creating your own cryptocurrency.",
      link: "/cryptocurrency-development", // Add your link here
    },
  ];

  return (
    <div className="bg-[#0C2C4F]">
      <div className="relative text-white px-4 md:px-6 lg:px-20 max-w-9xl mx-auto overflow-hidden">
        <div className="flex z-10 relative justify-between items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl ml-[7%] 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold mb-8">
              Key Benefits of Blockchain
            </h2>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src="/assets/logo/alpha.svg"
                    alt="Enhanced Security"
                    width={24}
                    height={24}
                  />
                  <h3 className="relative z-10 text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl font-normal">
                    Enhanced Security : Blockchain uses cryptographic algorithms
                    to secure data. Its decentralized nature makes it highly
                    resistant to hacking and fraud.
                  </h3>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src="/assets/logo/alpha.svg"
                    alt="Transparency"
                    width={24}
                    height={24}
                  />
                  <h3 className="relative z-10 text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl font-normal">
                    Transparency : All transactions on the blockchain are
                    recorded and visible to all participants, providing
                    transparency and accountability.
                  </h3>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src="/assets/logo/alpha.svg"
                    alt="Decentralization"
                    width={24}
                    height={24}
                  />
                  <h3 className="relative z-10 text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl font-normal">
                    Decentralization : By eliminating the need for
                    intermediaries, blockchain empowers peer-to-peer
                    transactions, reducing costs and increasing efficiency.
                  </h3>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src="/assets/logo/alpha.svg"
                    alt="Traceability"
                    width={24}
                    height={24}
                  />
                  <h3 className="relative z-10 text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl font-normal">
                    Traceability : Blockchain provides an immutable record of
                    transactions, making it ideal for supply chain management,
                    where tracing the origin and movement of products is
                    crucial.
                  </h3>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src="/assets/logo/alpha.svg"
                    alt="Cost Efficiency"
                    width={24}
                    height={24}
                  />
                  <h3 className="relative z-10 text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl font-normal">
                    Cost Efficiency : By removing the need for intermediaries
                    and automating transactions through smart contracts,
                    blockchain can significantly reduce costs in financial and
                    other industries.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between items-center p-7">
            <Image
              src="https://volvrit.s3.ap-south-1.amazonaws.com/frame1.png"
              alt="Cost Efficiency"
              width={24}
              height={24}
              unoptimized
              priority
              className="w-full"
            />
            <Image
              src="https://volvrit.s3.ap-south-1.amazonaws.com/frame2.png"
              alt="Cost Efficiency"
              width={24}
              height={24}
              unoptimized
              priority
              className="w-fit"
            />
          </div>
        </div>
        <Image
          src="https://volvrit.s3.ap-south-1.amazonaws.com/Union.png"
          alt="Cost Efficiency"
          width={24}
          height={24}
          unoptimized
          priority
          className="w-72 absolute -left-20 top-0 opacity-80"
        />
      </div>
      <div className="relative overflow-hidden">
        <Image
          src="https://volvrit.s3.ap-south-1.amazonaws.com/blockline.png"
          alt="Cost Efficiency"
          width={24}
          height={24}
          unoptimized
          priority
          className="w-full z-20 relative"
        />
        <Image
          src="https://volvrit.s3.ap-south-1.amazonaws.com/Union.png"
          alt="Cost Efficiency"
          width={24}
          height={24}
          unoptimized
          priority
          className="w-96 absolute -right-10 top-0 opacity-80"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-40 relative gap-10 p-20 pt-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0B335E] p-6 border-l-2 border-l-slate-400 py-24 2xl:py-32 shadow-md"
            >
              <h3 className="text-2xl text-center text-white font-bold mb-2">
                {service.title}
              </h3>
              <Link
                href={service.link}
                className="py-3 mx-auto mt-4 justify-center 2xl:py-4 px-5 w-fit mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
              >
                <span className="text-xl inline-flex gap-5 items-center 2xl:text-2xl 3xl:text-2xl">
                  Learn More{" "}
                  <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
                </span>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainBenefits;
