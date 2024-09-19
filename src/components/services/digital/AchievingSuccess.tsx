import Image from "next/image";

const AchievingSuccess = () => {
  const success = [
    "Analyzing the situation at the starting point and setting up goals.",
    "Fostering new ideas and making a list of hypotheses to improve the KPI.",
    "Prioritizing based on previous data, time, costs etc. to achieve goals faster.",
    "Experimenting and implementing the chosen hypothesis as an experiment.",
  ];
  return (
    <div className="container py-10 mx-auto px-4 md:px-6 lg:px-20 flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="w-full md:w-1/2 order-last md:order-1">
        <h4 className="text-2xl font-bold text-primary pb-4">
          Achieving Success With Volvrit
        </h4>
        <p className="text-base font-semibold pb-3">
          &quot;Our goal is to systematically experiment to solve business
          problems and achieve goals via learning experiences.&quot;
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
      <div className="w-full md:w-1/2 lg:p-12 order-1 md:order-last">
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
