import Image from "next/image";

const Testimonials = () => {
  return (
    <Image
      src={"/assets/home/trusted.png"}
      alt="testimonial"
      width={100}
      height={100}
      priority
      unoptimized
      className="w-full object-contain"
    />
  );
};

export default Testimonials;
