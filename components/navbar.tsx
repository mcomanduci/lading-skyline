"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full text-gray-700 bg-cream hidden md:block">
      <div className="flex flex-col max-w-7xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="relative md:mt-8">
            <Link
              href="/"
              className="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Skilline
            </Link>
            <svg
              className="h-11 z-40 absolute -top-2 -left-3"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                fill="#65DAFF"
              />
            </svg>
          </div>
        </div>
        <nav
          id="desktop-menu"
          className="flex flex-col grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 h-full"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            className="px-4 py-2 mt-2 bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline text-sm lg:text-base"
            href="#"
          >
            Home
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline lg:text-base"
            href="#"
          >
            Careers
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline lg:text-base"
            href="#"
          >
            Blog
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline lg:text-base"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="px-10 py-3 mt-2 text-sm text-center bg-white text-gray-800 rounded-full md:mt-8 md:ml-4 lg:text-base hover:bg-gray-50"
            href="#"
          >
            Login
          </Link>
          <Link
            className="px-10 py-3 mt-2 text-sm text-center bg-yellow text-white rounded-full md:mt-8 md:ml-4 lg:text-base hover:bg-yellow/80"
            href="#"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
}
