import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Testimonials from "@/components/home/Testimonials";
import Overview from "@/components/services/common/Overview";
import CRMBenefits from "@/components/services/crm/CRMBenefits";
import GetStarted from "@/components/services/common/GetStarted";
import CRMSolutions from "@/components/services/crm/CRMSolutions";
import ExtraBenefits from "@/components/services/crm/ExtraBenefits";
import CRMDevelopmentBanner from "@/components/services/crm/CRMDevelopmentBanner";

export default function Page() {
  return (
    <>
      <div className="pt-8 md:pt-20 lg:pt-24">
        <CRMDevelopmentBanner />
      </div>
      <Overview
        headerText={[
          "Your",
          "Customer Relationship",
          "through Digital Transformation",
        ]}
        description="From concept to launch, we bring your digital ideas to life with tailored web solutions that elevate your brand and engage your audience."
      />
      <CRMSolutions />
      <CRMBenefits />
      <ExtraBenefits />
      <Trusted />
      <OurPartners />
      <Testimonials />
      <GetStarted />
    </>
  );
}
