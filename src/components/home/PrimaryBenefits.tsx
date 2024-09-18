import Image from "next/image";
import { primaryBenefits } from "@/data/home/primary";

const PrimaryBenefits = () => {
  return (
    <div className="container mx-auto lg:px-8 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
        <div className="p-2">
          <h3 className="mb-3 font-bold uppercase">Primary benefits</h3>
          <p className="text-4xl leading-tight font-semibold">
            Why Choose Volvrit?
          </p>
          <span className="block w-1/3 h-[2px] mt-3 bg-black"></span>
        </div>
        {primaryBenefits.map((item: any) => {
          const Icon = item.icon;
          return (
            <div
              key={item?.id}
              className="border-l-2 border-slate-200 h-full p-5 pr-2"
            >
              <Icon size={40} />
              <h4 className="py-3 text-lg font-bold">{item?.title}</h4>
              <p className="text-sm font-medium">{item?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryBenefits;
