import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

// Define the prop types
interface SidebarLinkProps {
  href: string;
  isActive: boolean;
  icon: ReactNode; // Use ReactNode for elements like SVG
  children: ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  isActive,
  icon,
  children,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "relative flex h-14 w-full transition duration-200 items-center gap-x-4 fill-indigo-100 tracking-tight text-gray-400 px-8 hover:bg-zinc-500 hover:text-white",
        isActive && "!bg-[#9FA2B4] !text-white !fill-white"
      )}
    >
      {isActive && (
        <div className="absolute left-0">
          <svg
            width="3"
            height="56"
            viewBox="0 0 3 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3" height="56" fill="#DDE2FF" />
          </svg>
        </div>
      )}
      {icon}
      {children}
    </Link>
  );
};

export default SidebarLink;
