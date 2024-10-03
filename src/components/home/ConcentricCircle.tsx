import { motion } from "framer-motion";

const ConcentricCircles = () => {
  const circles = [
    { size: "w-[20vw] h-[20vw]", color: "border-gray-500" }, // Innermost circle
    { size: "w-[30vw] h-[30vw]", color: "border-gray-500" }, // Second circle
    { size: "w-[40vw] h-[40vw]", color: "border-gray-500" }, // Third circle
    { size: "w-[50vw] h-[50vw]", color: "border-gray-500" }, // Outer circle
  ];

  const items = [
    // First circle (Innermost)
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "top-0 left-1/2",
    },
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "bottom-0 left-1/2",
    },

    // Second circle
    {
      src: "/assets/logo/image56.png",
      size: "w-8 h-8",
      position: "top-0 left-[25%]",
    },
    {
      src: "/assets/logo/image60.png",
      size: "w-8 h-8",
      position: "top-0 left-[75%]",
    },
    {
      src: "/assets/logo/image64.png",
      size: "w-8 h-8",
      position: "bottom-0 left-1/2",
    },

    // Third circle
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "top-0 left-[15%]",
    },
    {
      src: "/assets/logo/image65.png",
      size: "w-8 h-8",
      position: "top-0 left-[85%]",
    },
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "bottom-0 left-[25%]",
    },

    // Fourth (Outer) circle
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "top-0 left-[10%]",
    },
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "top-0 left-[90%]",
    },
    {
      src: "/assets/logo/image55.png",
      size: "w-8 h-8",
      position: "bottom-0 left-[50%]",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* <div className="relative flex justify-center items-center">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute border rounded-full ${circle.size} ${circle.color}`}
          ></div>
        ))}
        {items.map((item, index) => (
          <motion.div key={index} className={`absolute ${item.position} w-8 `}>
            <img
              src={item.src}
              className={`${item.size} rounded-full`}
              alt="icon"
            />
          </motion.div>
        ))}
      </div> */}
      {/* <div className="w-[50vw] relative h-[50vw] border border-gray-600 rounded-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit">
          <img
            src="/assets/logo/image55.png"
            className="w-14 rounded-full"
            alt="icon"
          />
        </div>
      </div> */}
      {/* <div className="relative w-[25vw] h-[25vw] rounded-full border border-gray-500">
        <div className="absolute w-20 h-20 shadow-lg p-1 aspect-square z-10 rounded-full animate-spin-orbit origin-[12.5vw]">
          <img
            src="/assets/logo/image55.png"
            alt="Orbiting"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute w-20 h-20 shadow-lg p-1 aspect-square z-10 rounded-full animate-spin-orbit-delay origin-[12.5vw]">
          <img
            src="/assets/logo/image55.png"
            alt="Orbiting"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ConcentricCircles;
