"use client";
import Link from "next/link";
import { tabs } from "@/data/tabs";
import { usePathname } from "next/navigation";

const NavbarItems = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  return (
    <nav className="hidden lg:flex flex-row justify-center items-center text-lg font-medium gap-10">
      {tabs.map((item) => (
        <div key={item.id} className="relative group">
          <Link
            href={item.path}
            aria-label={item.label}
            className="relative inline-block py-1 cursor-pointer"
          >
            {item.label}
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-black transform origin-left transition-transform ${
                isActive(item.path) ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100`}
            ></span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavbarItems;