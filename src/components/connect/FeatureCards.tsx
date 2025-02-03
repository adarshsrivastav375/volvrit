import React from "react";

export default function FeatureCards() {
  const datas = [
    {
      value: "5.0",
      icon: "star",
      title: "Star Rating",
      subTitle: "Google",
    },
    {
      value: "4.9",
      icon: "star",
      title: "Star Rating",
      subTitle: "Clutch",
    },
    {
      value: "30",
      icon: "plus",
      title: "US-based digital",
      subTitle: "Product access",
    },
    {
      value: "150",
      icon: "plus",
      title: "Client Served by",
      subTitle: "US",
    },
    {
      value: "30M",
      icon: "plus",
      title: "Monthly active ",
      subTitle: "users active users",
    },
  ];

  return (
    <div className="container flex justify-center items-center w-11/12 px-16 mb-10  max-w-7xl m-auto">
      {datas?.map((data, index) => (
        <div
          key={index}
          className={`card border-gray-200 p-4 px-5 flex-col justify-center items-center w-full text-center ${
            datas.length - 1 === index ? "border-l-2  border-r-2" : "border-l-2 "
          }`}
        >
          <h2 className="text-4xl flex items-center justify-center w-full font-mono font-bold ">
            {data?.value || "4.5"}
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="url(#gradient)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="30%" stopColor="#875BF1" /> {/* Purple */}
                  <stop offset="70%" stopColor="#2F88FF" /> {/* Blue */}
                  <stop offset="100%" stopColor="#2F88FF" /> {/* Blue */}
                </linearGradient>
              </defs>
              {data?.icon === "star" ? (
                <path
                  fill="url(#gradient)"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M12 2L14.9 8.6L22 9.3L16.6 14.2L18.2 21L12 17.6L5.8 21L7.4 14.2L2 9.3L9.1 8.6L12 2Z"
                />
              ) : (
                <path
                  fill="url(#gradient)"
                  d="M12 5V12M12 12V19M12 12H19M12 12H5"
                  stroke="url(#gradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </h2>
          <h3>{data?.title}</h3>
          <h3>{data?.subTitle}</h3>
        </div>
      ))}
    </div>
  );
}
