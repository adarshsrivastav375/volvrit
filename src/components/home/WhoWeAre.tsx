import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section className="bg-white container mx-auto p-12">
      <div>
        <h3 className="text-lg font-semibold uppercase mb-3">Who We Are</h3>
        <h2 className="text-4xl lg:w-2/5 leading-snug mr-auto font-bold mb-10">
          Bridging Innovation & Regulation
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <Image
            width={400}
            height={400}
            src="/assets/home/ui_ux.jfif"
            alt="Bridging Innovation & Regulation"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-20">
          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Mission</h4>
              <p className="font-medium">
                At Volvrit, our mission is to empower businesses by integrating
                cutting-edge technology and comprehensive legal expertise. We
                aim to provide tailored solutions that enhance operational
                efficiency, ensure legal compliance, and foster sustainable
                growth.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-2">Vision</h4>
              <p className="font-medium">
                Our vision is to become the premier partner for businesses
                seeking a holistic approach to technology and legal solutions.
                We aspire to set the standard for innovation and excellence,
                creating a world where businesses seamlessly blend technology
                and legal compliance to achieve unprecedented success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
