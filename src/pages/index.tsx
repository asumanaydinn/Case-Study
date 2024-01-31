import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Perform the sign-in
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      // Redirect to the desired page after successful sign-in
      window.location.href = "/overview";
    }
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
            <div className="relative h-16 w-80">
              <div className="absolute left-0 top-[22px] h-10 w-80 rounded-lg border border-gray-100 bg-white" />
              <label className="absolute left-[16px] top-[33px] w-72  text-sm font-normal leading-tight tracking-tight text-slate-600 opacity-40">
                Email address
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="absolute left-0 top-0 h-4 w-80  text-xs font-bold  tracking-tight text-gray-400"
                />
              </label>
            </div>

            <div className="relative h-16 w-80">
              <div className="absolute left-0 top-[22px] h-10 w-80 rounded-lg border border-gray-100 bg-white" />
              <label className="absolute left-[16px] top-[33px] w-64  text-sm font-normal leading-tight tracking-tight text-slate-600 opacity-40">
                Password
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="absolute left-0 top-0 h-4 w-80  text-xs font-bold  tracking-tight text-gray-400"
                />
              </label>
            </div>

            <button type="submit" className="relative h-12 w-80">
              <div className="absolute left-0 top-0 h-12 w-80 rounded-lg bg-blue-600 shadow" />
              <div className="absolute left-[24px] top-[15px] w-64 text-center  text-sm font-semibold leading-tight tracking-tight text-white">
                Log In
              </div>
            </button>
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
