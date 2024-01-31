import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "./Link";

const NavigationMenu = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div className="flex h-full w-64 flex-col items-center gap-y-20 bg-zinc-700">
      <div className="flex w-full items-center gap-x-2 px-8 py-10">
        <div className="relative h-8 w-8">
          <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-600" />
        </div>
        <div className="text-lg font-bold tracking-wide text-gray-400 opacity-70">
          B2Metric
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-2">
        <Link
          href={"/overview"}
          isActive={isActive("/overview")}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_584_253)">
                <path
                  d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_584_253">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        >
          Overview
        </Link>
        <Link
          href={"/users"}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"
                fill="currentColor"
              />
            </svg>
          }
          isActive={isActive("/users")}
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
