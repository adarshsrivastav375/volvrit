import { faqs } from "@/data/home/faqs";
import Accordion from "../common/Accordion";
import Image from "next/image";

const Faqs = () => {
  return (
    <div className="bg-[#121212]">
      <div className="grid grid-cols-2 container mx-auto gap-10 p-12">
        <Image
          width={400}
          height={400}
          alt="image"
          src={"/assets/home/ui_ux.jfif"}
          className="w-full object-cover rounded-xl"
        />
        <div>
          <p className="text-slate-100 text-5xl mb-10">How We work?</p>
          <Accordion faqs={faqs} />
          <button className="uppercase bg-slate-100 px-6 py-3 text-sm font-extrabold rounded-sm">
            Start A Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
