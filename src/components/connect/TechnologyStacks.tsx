import Image from "next/image";
import React from "react";

interface StackCategory {
  id: number;
  title: string;
  items: { name: string; icon: string }[];
}

const techStacks: StackCategory[] = [
  {
    id: 1,
    title: "Language",
    items: [
      { name: "Java", icon: "/assets/banners/java.svg" },
      { name: "Kotlin", icon: "/assets/banners/kotlin.svg" },
    ],
  },
  {
    id: 2,
    title: "Frameworks",
    items: [
      { name: "Android SDK", icon: "/assets/banners/android.svg" },
      { name: "Google Fit SDK", icon: "/assets/banners/googlefit.svg" },
      { name: "Open GL", icon: "/assets/banners/opengl.svg" },
    ],
  },
  {
    id: 3,
    title: "Database",
    items: [
      { name: "Firestore", icon: "/assets/banners/firestore.svg" },
      { name: "SQLite", icon: "/assets/banners/sqlLite.svg" },
      { name: "Realm", icon: "/assets/banners/realm.svg" },
    ],
  },
  {
    id: 4,
    title: "Backend",
    items: [
      { name: "Jest", icon: "/assets/banners/jest.svg" },
      { name: "Enzyme", icon: "/assets/banners/enzyme.svg" },
      { name: "Appium", icon: "/assets/banners/appium.svg" },
    ],
  },
];

const TechnologyStacks: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Technology Stacks
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We use cutting-edge technology platforms and advanced software to
          create and deploy high-quality Android apps. This ensures that our
          Android app development services always exceed the competition and
          provide outstanding success for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-0 gap-6">
          {techStacks.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-lg rounded-3xl h-96  p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 border-b-2 pb-2 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-14 h-14  p-1 flex justify-center items-center bg-gray-300 rounded-full overflow-hidden">
                      <Image
                        width={50}
                        height={50}
                        src={item.icon}
                        alt={item.name}
                        className=" object-contain"
                      />
                    </div>
                    <span className="text-gray-700">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStacks;
