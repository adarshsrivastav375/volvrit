import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="w-full lg:px-20 container mx-auto bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {/* Mobile App Development */}
        <div className="relative bg-primary text-white aspect-square p-6 rounded-2xl flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20">
            {/* Empty placeholder for background */}
            <Image
              src="/your-placeholder-image.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <h3 className="text-2xl font-bold z-10">Mobile App Development</h3>
          <Link
            href={""}
            className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-lg z-10"
          >
            Learn more
          </Link>
        </div>

        {/* Web App Development */}
        <div className="relative bg-[#B4C9E0] col-span-2 text-black p-6 rounded-2xl flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20">
            <Image
              src="/your-placeholder-image.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <h3 className="text-2xl font-bold z-10">Web App Development</h3>
          <Link
            href={""}
            className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-lg z-10"
          >
            Learn more
          </Link>
        </div>

        {/* Digital Marketing */}
        <div className="relative bg-[#B4C9E0] text-white p-6 rounded-2xl aspect-[1/1.5] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20">
            <Image
              src="/your-placeholder-image.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <h3 className="text-2xl font-bold z-10">Digital Marketing</h3>
          <Link
            href={""}
            className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-lg z-10"
          >
            Learn more
          </Link>
        </div>

        {/* CRM Development */}
        <div className="relative bg-primary text-white p-6 rounded-2xl flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20">
            <Image
              src="/your-placeholder-image.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <h3 className="text-2xl font-bold z-10">CRM Development</h3>
          <Link
            href={""}
            className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-lg z-10"
          >
            Learn more
          </Link>
        </div>

        {/* API Development */}
        <div className="relative bg-primary text-white p-6 rounded-2xl flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20">
            <Image
              src="/your-placeholder-image.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <h3 className="text-2xl font-bold z-10">API Development</h3>
          <Link
            href={""}
            className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-lg z-10"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
