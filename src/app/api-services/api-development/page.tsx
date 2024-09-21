import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Testimonials from "@/components/home/Testimonials";
import Overview from "@/components/services/common/Overview";
import GetStarted from "@/components/services/common/GetStarted";
import APIDevelopmentBanner from "@/components/services/api/APIDevelopment";
import ServicesInDevelopement from "@/components/services/api/ServicesInDevelopement";

export default function Page() {
  return (
    <>
      <div className="pt-8 md:pt-20 lg:pt-24">
        <APIDevelopmentBanner />
      </div>
      <Overview
        headerText={[
          "Your",
          "Customer Relationship",
          "through Digital Transformation",
        ]}
        description="From concept to launch, we bring your digital ideas to life with tailored web solutions that elevate your brand and engage your audience."
      />
      <ServicesInDevelopement />
      <Trusted />
      <OurPartners />
      <Testimonials />
      <GetStarted />
    </>
  );
}
