import React from "react";
import Link from "next/link";
import Card from "../../common/Banner";

const DigitalMarketingBanner = () => {
  return (
    <Card
      relative={true}
      imageAlt="Web Development"
      imageUrl="/assets/banners/digital.png"
    >
      <div className="text-white mt-10 relative">
        <h4 className="text-4xl mb-5 font-extralight">
          Boost Revenue Growth
          <br />
          <strong className="font-medium">Digital Marketing</strong>
        </h4>
        <p className="text-sm opacity-80 w-1/2 mx-auto">
          Volvrit is a digital marketing agency in India that can give you a
          makeover. A facelift you didn’t know you needed.{" "}
        </p>
        <Link
          href={"tel:+01998989289"}
          className="py-2 px-6 absolute left-1/2 -translate-x-1/2 -bottom-16 rounded-lg bg-white text-primary transition-all text-sn ease-in-out"
          aria-label="Phone number"
        >
          Contact Us
        </Link>
      </div>
    </Card>
  );
};

export default DigitalMarketingBanner;
