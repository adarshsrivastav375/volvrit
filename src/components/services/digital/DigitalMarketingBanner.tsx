import Card from "../../common/Banner";
import ContactUsButton from "@/components/common/buttons/ContactUsButton";

const DigitalMarketingBanner = () => {
  return (
    <Card
      relative={true}
      imageAlt="Web Development"
      imageUrl="/assets/banners/digital.png"
    >
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-full mx-auto md:text-4xl mb-5 font-extralight">
          Boost Revenue Growth
          <br />
          <strong className="font-medium">Digital Marketing</strong>
        </h4>
        <p className="text-sm pb-2 font-extralight px-4 md:px-0 md:w-1/2 mx-auto">
          Volvrit is a digital marketing agency in India that can give you a
          makeover. A facelift you didn&apos;t know you needed.{" "}
        </p>
        <ContactUsButton />
      </div>
    </Card>
  );
};

export default DigitalMarketingBanner;
