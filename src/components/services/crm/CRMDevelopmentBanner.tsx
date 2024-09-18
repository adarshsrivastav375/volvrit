import React from "react";
import Link from "next/link";
import Card from "../../common/Banner";

const CRMDevelopmentBanner = () => {
  return (
    <Card imageAlt="Web Development" imageUrl="/assets/banners/crm.png">
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-2/3 md:w-full mx-auto md:text-4xl mb-5 font-extralight">
          Small Business Automation <br />
          and
          <strong className="font-medium"> CRM Software</strong>
        </h4>
        <p className="text-sm font-extralight px-4 md:px-0 md:w-1/2 mx-auto">
          we build software from scratch to transform your operations through
          solutions designed to improve your customer interactions
        </p>
        <Link
          href={"tel:+01998989289"}
          className="py-2 px-6 hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-16 rounded-lg bg-white text-primary transition-all text-sn ease-in-out"
          aria-label="Phone number"
        >
          Contact Us
        </Link>
      </div>
    </Card>
  );
};

export default CRMDevelopmentBanner;
