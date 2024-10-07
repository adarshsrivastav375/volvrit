import Card from "../../common/Banner";
import ContactUsButton from "@/components/common/buttons/ContactUsButton";

const CRMDevelopmentBanner = () => {
  return (
    <Card imageAlt="CRM Development" imageUrl="/assets/banners/crm.png">
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-2/3 md:w-full mx-auto md:text-4xl mb-5 font-extralight">
          Small Business Automation <br />
          and
          <strong className="font-medium"> CRM Software</strong>
        </h4>
        <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-1/2 mx-auto">
          we build software from scratch to transform your operations through
          solutions designed to improve your customer interactions
        </p>
        <ContactUsButton />
      </div>
    </Card>
  );
};

export default CRMDevelopmentBanner;
