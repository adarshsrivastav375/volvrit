import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Overview from "@/components/services/common/Overview";
import GetStarted from "@/components/services/common/GetStarted";
import WhyChooseUs from "@/components/services/digital/WhyChooseUs";
import UniqueFeature from "@/components/services/digital/UniqueFeature";
import AchievingSuccess from "@/components/services/digital/AchievingSuccess";
import DigitalMarketingBanner from "@/components/services/digital/DigitalMarketingBanner";

export default function Page() {
  return (
    <>
      <div className="pt-8 md:pt-20 lg:pt-24">
        <DigitalMarketingBanner />
      </div>
      <Overview
        headerText={[
          "Your",
          "Customer Relationship",
          "through Digital Transformation",
        ]}
        description="From concept to launch, we bring your digital ideas to life with tailored web solutions that elevate your brand and engage your audience."
      />
      <UniqueFeature />
      <WhyChooseUs />
      <AchievingSuccess />
      <Trusted />
      <OurPartners />
      <GetStarted />
    </>
  );
}
