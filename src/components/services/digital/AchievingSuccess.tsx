import Image from "next/image";

const AchievingSuccess = () => {
  const success = [
    "Analyzing the situation at the starting point and setting up goals.",
    "Fostering new ideas and making a list of hypotheses to improve the KPI.",
    "Prioritizing based on previous data, time, costs etc. to achieve goals faster.",
    "Experimenting and implementing the chosen hypothesis as an experiment.",
  ];
  return (
    <div className="container mx-auto lg:px-20 flex justify-center items-center gap-10">
      <div className="lg:w-1/2">
        <h4 className="text-2xl font-bold text-primary pb-4">
          Achieving Success With Volvrit
        </h4>
        <p className="text-base font-semibold pb-3">
          “Our goal is to systematically experiment to solve business problems
          and achieve goals via learning experiences."
        </p>
        <p className="text-sm font-light pb-5">
          There is no one-size-fits-all approach to growing a business,
          especially internationally. That&apos;s why we believe in the
          importance of continuous experimentation to reach our goals.
        </p>
        <div className="flex flex-col gap-2 text-sm">
          {success.map((item: any, index: any) => {
            return (
              <li key={index} className="list-decimal">
                {item}
              </li>
            );
          })}
        </div>
      </div>
      <div className="lg:w-1/2 p-12">
        <Image
          src={"/assets/services/achievesuccess.png"}
          alt="Success"
          width={400}
          height={100}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AchievingSuccess;
