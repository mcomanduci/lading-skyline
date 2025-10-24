"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function News() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in" className="mt-16 text-center">
        <h2 className="text-darken text-2xl font-semibold">
          Latest News and Resources
        </h2>
        <p className="text-gray-500 my-5">
          See the developments that have occurred to Skillines in the world
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        className="my-14 flex flex-col lg:flex-row lg:space-x-20"
      >
        <div className="lg:w-6/12">
          <Image
            className="w-full mb-6"
            src="/laptop-news.png"
            alt="Laptop news"
            width={640}
            height={340}
          />
          <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">
            NEWS
          </span>
          <h1 className="text-gray-800 font-semibold my-3 text-xl">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h1>
          <p className="text-gray-500 mb-3">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <a href="" className="underline">
            Read more
          </a>
        </div>
        <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <Image
                  className="rounded-xl w-full"
                  src="/children-laptop.png"
                  alt="Children with laptop"
                  width={280}
                  height={200}
                />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                  PRESS RELEASE
                </span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <Image
                  className="rounded-xl w-full"
                  src="/girl-laptop.png"
                  alt="Girl with laptop"
                  width={280}
                  height={200}
                />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                  NEWS
                </span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <Image
                  className="rounded-xl w-full"
                  src="/cat-laptop.png"
                  alt="Cat with laptop"
                  width={280}
                  height={200}
                />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                  NEWS
                </span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
