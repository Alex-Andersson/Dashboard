import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen m-4 lg:m-0">
      <div
        className="hidden bg-cover bg-no-repeat bg-center lg:block"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL + "/landing.jpg"}")`,
        }}
      ></div>
      <div className="flex justify-center items-center">
        <div className="w-96 space-y-8 lg:w-96">
          <div>
            <img
              className="mx-auto h-48 w-auto"
              src="https://www.ibnrushd.se/wp-content/uploads/2021/10/ibn-rushd-loga.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign Up an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
            <div>
                <label htmlFor="first-name" className="text-sm font-medium text-black">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="username"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="text-sm font-medium text-black">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="lastNmae"
                  type="text"
                  autoComplete="usernmae"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="text-sm font-medium text-black">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-black">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="text-sm font-medium text-black">
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#81c341] hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-zinc-700 group-hover:text-zinc-900"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
