import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CRMBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Simplicity",
      description:
        "Our CRM platforms often come with built-in features that can be huge. We propose customising CRM&apos;s functionality and interface to reduce the learning curve for users and enhance system adoption.",
    },
    {
      id: 2,
      title: "Cost-efficiency in the long run",
      description:
        "With a fully customised CRM, you can expand your team without worrying about subscription costs. Owning your CRM means you invest upfront but save on recurring fees, leading to long-term cost savings.",
    },
    {
      id: 3,
      title: "Ownership",
      description:
        "Having full control over your CRM allows you to access new features as needed, rather than waiting for vendor-dictated platform upgrades. This ensures your system evolves alongside your business requirements.",
    },
    {
      id: 4,
      title: "Scalability",
      description:
        "Customised CRM lets you succeed at every possible parameter of customer relationship nurturing. This results in better lead conversion rates, issues getting resolved faster for customer services and, overall, better customer satisfaction.",
    },
  ];
  return (
    <>
      <div className="max-w-9xl mx-auto py-5 md:py-10 px-4 md:px-8 lg:px-20 text-center">
        <div className="flex justify-between items-center gap-20">
          <h4 className="md:w-2/3 mx-auto text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-left py-5">
            Ideating and developing a customised CRM Application with numerous
            benefits!
          </h4>
          <Link
            href="/contact-us"
            className="py-3 mx-auto justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 my-5 md:my-10 text-left lg:px-6">
          {benefits.map((benefit: any) => {
            return (
              <div
                key={benefit?.id}
                className="bg-white border border-gray-500 p-4 md:p-6 lg:p-8 rounded-lg text-black"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 md:mb-3">
                  {benefit?.title}
                </h3>
                <p className="text-xs md:text-base lg:text-lg font-light leading-4 md:leading-5">
                  {benefit?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CRMBenefits;
