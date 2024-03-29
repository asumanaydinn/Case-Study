import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
  const [seePassword, setSeePassword] = useState(false);
  const { login, password, setPassword, setUsername, username, error } =
    useAuthContext();

  return (
    <div className="flex h-screen w-screen  items-center justify-center bg-[#363740]">
      <div className="flex h-fit w-96 flex-col items-center justify-center gap-y-12 rounded-lg bg-white px-9 py-10">
        <div className="flex w-full flex-col items-center justify-center gap-y-8">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="h-12 w-12 rounded-full bg-blue-600" />
            <div className="w-80 text-center text-lg font-bold tracking-wide text-gray-400 opacity-70">
              B2Metric
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="w-80 text-center text-2xl font-bold tracking-tight text-gray-800">
              Log In to B2Metric
            </div>
            <div className="w-80 text-center text-sm font-normal leading-tight tracking-tight text-gray-400">
              Enter your email and password below
            </div>
          </div>

          <form onSubmit={login} className="flex flex-col gap-y-6 w-full">
            <div className="flex flex-col gap-y-2">
              <div className="text-gray-400 text-xs font-bold tracking-tight">
                email
              </div>
              <Input
                error={error}
                placeholder="Email Address"
                type="text"
                value={username}
                onChange={(e) => setUsername(e)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-gray-400 text-xs font-bold tracking-tight">
                Password
              </div>
              <Input
                renderSuffix={() => (
                  <div
                    onClick={() => setSeePassword(!seePassword)}
                    className="cursor-pointer w-6 h-6 flex items-center justify-center transition-all duration-200"
                  >
                    {seePassword ? (
                      <RemoveRedEyeOutlinedIcon
                        fontSize="inherit"
                        className="text-blue-600 w-5 h-5"
                      />
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.9999 13.7501C8.02464 13.7501 6.42568 12.2212 6.27855 10.2837L3.54678 8.17247C3.18766 8.62299 2.85719 9.09929 2.59053 9.62012C2.53096 9.73796 2.49992 9.86816 2.49992 10.0002C2.49992 10.1322 2.53096 10.2624 2.59053 10.3803C4.00277 13.1357 6.7986 15.0001 9.9999 15.0001C10.7007 15.0001 11.3767 14.8959 12.0283 14.7277L10.677 13.6821C10.4538 13.7252 10.2272 13.748 9.9999 13.7501ZM18.1723 15.2631L15.2934 13.0381C16.1679 12.3011 16.8872 11.3975 17.4093 10.38C17.4689 10.2622 17.4999 10.132 17.4999 9.99994C17.4999 9.8679 17.4689 9.7377 17.4093 9.61986C15.997 6.86439 13.2012 5.00007 9.9999 5.00007C8.65915 5.0017 7.34017 5.33923 6.16344 5.98184L2.85042 3.42116C2.80722 3.38755 2.75782 3.36277 2.70504 3.34825C2.65226 3.33374 2.59713 3.32976 2.54281 3.33656C2.4885 3.34335 2.43605 3.36079 2.38847 3.38786C2.34089 3.41493 2.29912 3.45112 2.26553 3.49434L1.75433 4.15241C1.68652 4.23965 1.65613 4.35025 1.66985 4.45989C1.68358 4.56952 1.74029 4.66922 1.82751 4.73705L17.1494 16.579C17.1926 16.6126 17.242 16.6374 17.2948 16.6519C17.3476 16.6664 17.4027 16.6704 17.457 16.6636C17.5113 16.6568 17.5638 16.6394 17.6113 16.6123C17.6589 16.5852 17.7007 16.549 17.7343 16.5058L18.2457 15.8477C18.3135 15.7605 18.3439 15.6498 18.3301 15.5402C18.3163 15.4306 18.2596 15.3309 18.1723 15.2631ZM13.3879 11.5652L12.3645 10.774C12.4507 10.5249 12.4964 10.2636 12.4999 10.0001C12.505 9.6142 12.4195 9.23252 12.2503 8.88568C12.0811 8.53884 11.8329 8.23652 11.5257 8.00299C11.2185 7.76947 10.8608 7.61125 10.4813 7.54104C10.1019 7.47084 9.71122 7.49061 9.34079 7.59877C9.49782 7.81156 9.58277 8.06895 9.58324 8.3334C9.57935 8.42141 9.5659 8.50873 9.54313 8.59382L7.6262 7.11231C8.29209 6.55585 9.13212 6.25071 9.9999 6.25007C10.4924 6.2498 10.9802 6.34661 11.4353 6.53496C11.8904 6.72332 12.3039 6.99954 12.6522 7.34781C13.0004 7.69608 13.2767 8.10959 13.465 8.56468C13.6534 9.01978 13.7502 9.50754 13.7499 10.0001C13.7499 10.5634 13.6121 11.0884 13.3879 11.5654V11.5652Z"
                          fill="#9FA2B4"
                        />
                      </svg>
                    )}
                  </div>
                )}
                error={error}
                placeholder="Password"
                type={seePassword ? "text" : "password"}
                value={password}
                onChange={(e: string) => setPassword(e)}
              />
            </div>

            <Button htmlType="submit">Log In</Button>
          </form>

          <div className="relative h-5 w-52">
            <div className="absolute left-0 top-0 text-center  text-sm font-normal leading-tight tracking-tight text-gray-400">
              Don’t have an account?
            </div>
            <div className="absolute left-[163px] top-0 inline-flex h-5 w-12 items-center justify-center">
              <div className="w-12 text-center  text-sm font-semibold leading-tight tracking-tight text-blue-600">
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
