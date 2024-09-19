import Image from "next/image";

const AchievementsSection = () => {
  return (
    <>
      <div className="py-24 relative bg-black text-white flex flex-col justify-center items-center">
        {/* Background Image */}
        <Image
          fill
          priority
          unoptimized
          alt="Background"
          src="/assets/home/herosection_bg.jfif"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Top Section */}
        <div className="container mx-auto lg:px-12 flex flex-col md:flex-row z-10 items-center justify-between">
          {/* Left Side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold">Check recent achievements.</h2>
            <p className="mt-4 text-sm">
              We provide effective ideas that grow our client&apos;s businesses.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Request Price
            </button>
          </div>

          {/* Right Side - Statistics */}
          <div className="md:w-1/2 grid grid-cols-2 gap-10 mt-8 md:mt-0">
            <div>
              <h3 className="text-6xl font-extralight">75%</h3>
              <p className="mt-5">
                Implemented AI-driven solutions that boosted client efficiency
                by 75% on average.
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-extralight">2.5k</h3>
              <p className="mt-5">
                Expanded our client base to 2,500+ satisfied businesses across
                various industries.
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-extralight">40+</h3>
              <p className="mt-5">
                Garnered 40+ awards for excellence in tech and legal services.
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-extralight">3x</h3>
              <p className="mt-5">
                Achieved a 3x increase in our client base over the past year.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-black text-white py-24 text-center">
        <h3 className="text-2xl font-semibold">
          Your Growth Is Our Priority. Get in Touch with Us.
        </h3>
        <button className="mt-6 bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default AchievementsSection;
