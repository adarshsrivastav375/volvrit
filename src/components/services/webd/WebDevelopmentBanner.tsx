import Card from "../../common/Banner";
import ContactUsButton from "@/components/common/buttons/ContactUsButton";

const WebDevelopmentBanner = () => {
  return (
    <Card
      padding="px-0"
      imageAlt="Web Development"
      imageUrl="/assets/banners/macscreen1.png"
    >
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-full mx-auto md:text-4xl mb-5 font-extralight">
          Transform Your Vision into <br />
          <strong className="font-medium">a Stunning Website</strong>
        </h4>
        <p className="text-sm font-extralight px-4 md:px-0 md:w-1/2 mx-auto">
          Our expert team specializes in creating beautiful, responsive, and
          user-friendly websites that captivate your audience and drive results.
          Whether you&apos;re launching a new brand or revamping your online
          presence,
        </p>
        <ContactUsButton />
      </div>
    </Card>
  );
};

export default WebDevelopmentBanner;
