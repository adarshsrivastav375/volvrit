import { caseStudies } from "@/data/home/primary";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div className="bg-black p-12">
      <div className="container mx-auto text-white">
        <p className="text-5xl mb-14 font-bold lg:px-10">Case Studies</p>
        <div className="grid grid-cols-3 gap-14 lg:px-10">
          {caseStudies.map((study) => {
            return (
              <div
                key={study?.id}
                className="bg-black border border-slate-100/50 rounded-xl overflow-hidden"
              >
                <Image
                  width={300}
                  height={200}
                  alt={study?.title}
                  src={"/assets/home/ui_ux.jfif"}
                  className="w-full bg-slate-100/50 rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-3">{study.title}</h3>
                  <p className="text-sm text-slate-100/70">
                    {study.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
