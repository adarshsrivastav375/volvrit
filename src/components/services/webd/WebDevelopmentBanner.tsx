import React from "react";
import Link from "next/link";
import Card from "../../common/Banner";

const WebDevelopmentBanner = () => {
  return (
    <Card imageAlt="Web Development" imageUrl="/assets/banners/macscreen1.png">
      <div className="text-white mt-10 relative">
        <h4 className="text-4xl mb-5 font-extralight">
          Transform Your Vision into <br />
          <strong className="font-medium">a Stunning Website</strong>
        </h4>
        <p className="text-sm opacity-80 w-1/2 mx-auto">
          Our expert team specializes in creating beautiful, responsive, and
          user-friendly websites that captivate your audience and drive results.
          Whether you&apos;re launching a new brand or revamping your online
          presence,
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

export default WebDevelopmentBanner;
