import Card from "../../common/Banner";
import ContactUsButton from "@/components/common/buttons/ContactUsButton";

const MobileDevelopmentBanner = () => {
  return (
    <Card
      relative={true}
      imageAlt="Web Development"
      imageUrl="/assets/banners/mobile.png"
    >
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-full mx-auto md:text-4xl mb-5 font-extralight">
          Build a{" "}
          <strong className="font-medium">
            Mobile App <br />
          </strong>
          That Wows Your Users
        </h4>
        <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-1/2 mx-auto">
          From concept to launch, we craft mobile apps that not only look great
          but also deliver exceptional user experiences across all devices.
        </p>
        <ContactUsButton />
      </div>
    </Card>
  );
};

export default MobileDevelopmentBanner;
