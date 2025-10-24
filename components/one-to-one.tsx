"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function OneToOne() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-right" className="md:w-7/12">
          <Image
            className="md:w-11/12"
            src="/discussion.png"
            alt="Discussion"
            width={761}
            height={565}
          />
        </div>
        <div
          data-aos="fade-left"
          className="md:w-5/12 md:transform md:-translate-y-6"
        >
          <h2 className="font-semibold text-darken text-3xl lg:pr-64">
            One-on-One <span className="text-yellow">Discussions</span>
          </h2>
          <p className="text-gray-500 my-5 lg:pr-24">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <button
        data-aos="flip-up"
        className="px-5 py-3 border border-yellow text-yellow font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
      >
        See more features
      </button>
    </>
  );
}
