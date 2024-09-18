import React from "react";
import Link from "next/link";
import Card from "../../common/Banner";

const MobileDevelopmentBanner = () => {
  return (
    <Card
      relative={true}
      imageAlt="Web Development"
      imageUrl="/assets/banners/mobile.png"
    >
      <div className="text-white mt-10 relative">
        <h4 className="text-4xl mb-5 font-extralight">
          Build a{" "}
          <strong className="font-medium">
            Mobile App <br />
          </strong>
          That Wows Your Users
        </h4>
        <p className="text-sm opacity-80 w-1/2 mx-auto">
          From concept to launch, we craft mobile apps that not only look great
          but also deliver exceptional user experiences across all devices.
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

export default MobileDevelopmentBanner;
