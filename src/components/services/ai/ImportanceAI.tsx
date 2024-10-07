import Image from "next/image";
import Services from "./Services";

const ImportanceAI = () => {
  const aiBenefits = [
    {
      id: 1,
      title: "AI Consulting",
      description:
        "Consultation from our company to utilize AI along with tailor-made solutions delivery on need basis for businesses.",
      imageUrl: "path/to/ai-consulting.png",
    },
    {
      id: 2,
      title: "Cost Savings",
      description:
        "AI ensures to minimize labor-intensive work for a reduction in the cost of operations and optimum resource utilization.",
      imageUrl: "path/to/cost-savings.png",
    },
    {
      id: 3,
      title: "Decision-Making",
      description:
        "A business will get more timely and informed decisions based on insights infused with data derived from AI.",
      imageUrl: "path/to/decision-making.png",
    },
    {
      id: 4,
      title: "Better Customer Experiences",
      description:
        "AI makes interactions more personalized, enhances service delivery, and improves customer satisfaction.",
      imageUrl: "path/to/better-customer-experiences.png",
    },
    {
      id: 5,
      title: "Innovation and Growth",
      description:
        "AI has opened new avenues in terms of product innovation, market expansion, and business transformation.",
      imageUrl: "path/to/innovation-and-growth.png",
    },
  ];
  const aiUseCases = [
    {
      id: 1,
      title: "AI for Predictive Diagnostics",
      description:
        "AI for predictive diagnostics, patient data analysis, and personalized treatment recommendations.",
      imageUrl: "path/to/predictive-diagnostics.png",
    },
    {
      id: 2,
      title: "AI for Fraud Detection",
      description:
        "AI-powered fraud detection, risk management, and algorithmic trading solutions.",
      imageUrl: "path/to/fraud-detection.png",
    },
    {
      id: 3,
      title: "AI for Marketing and Supply Chain",
      description:
        "AI for personalized marketing, demand forecasting, and supply chain optimization.",
      imageUrl: "path/to/marketing-supply-chain.png",
    },
    {
      id: 4,
      title: "AI for Automation",
      description:
        "AI-driven automation, quality control, and predictive maintenance.",
      imageUrl: "path/to/automation.png",
    },
    {
      id: 5,
      title: "AI for Customer Personalization",
      description:
        "AI for customer personalization, recommendation engines, and customer service automation.",
      imageUrl: "path/to/customer-personalization.png",
    },
  ];
  const aiDevelopmentProcess = [
    {
      id: 1,
      title: "Consultation and Requirement Gathering",
      description:
        "We start by understanding your business goals and challenges.",
      imageUrl: "path/to/consultation-requirements.png",
    },
    {
      id: 2,
      title: "AI Strategy Development",
      description:
        "We design a custom AI strategy aligned with your objectives.",
      imageUrl: "path/to/strategy-development.png",
    },
    {
      id: 3,
      title: "Solution Design and Development",
      description:
        "Our expert developers create scalable AI solutions tailored to your business needs.",
      imageUrl: "path/to/solution-design.png",
    },
    {
      id: 4,
      title: "Integration and Testing",
      description:
        "We integrate AI solutions into your existing systems and rigorously test them for performance and accuracy.",
      imageUrl: "path/to/integration-testing.png",
    },
    {
      id: 5,
      title: "Deployment and Support",
      description:
        "Once deployed, we provide continuous support to ensure smooth operation and optimal performance.",
      imageUrl: "path/to/deployment-support.png",
    },
  ];
  return (
    <div className="bg-[#0B2D52] text-white">
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20">
        <div className="flex justify-between items-center gap-20">
          <div className="w-1/2">
            <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              What&apos;s the Importance of AI for Business?
            </h4>
            <p className="text-base font-extralight">
              Business automation with AI doesn&apos;t just enshrine it in a
              complex method but has also enabled actionable insight maximizes
              customer interactions. AI inclusion by businesses increases
              efficiency cuts costs and helps them fit for purpose within the
              digital-first world. AI helps a company to make more intelligent
              decisions, produces better forecasts of the markets, and provides
              customized experiences to its customers. Business AI development
              opens up new avenues for innovation while smoothing out operations
              and reducing manual labor.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI10.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20">
          <div className="w-1/2">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI9.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 text-right">
            <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              AI Development Services - Volvrit&apos;s Expertise
            </h4>
            <p className="text-base font-extralight">
              We are happy to provide top-class, customized AI Development
              Services for all our clients. Our team of AI experts will
              thoroughly understand how to work with the latest technology and
              develop smart solutions that align with your business goals. We
              work collaboratively with you so that our AI system can be
              smoothly integrated into your operations, which finally helps to
              boost productivity along with smart decision-making based on data.
            </p>
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default ImportanceAI;
