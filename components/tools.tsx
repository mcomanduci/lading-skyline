"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function Tools() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
      <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
        <h2 className="text-darken font-semibold text-3xl lg:pr-56">
          <span className="text-yellow">Tools</span> For Teachers And Learners
        </h2>
        <p className="text-gray-500 my-4 lg:pr-32">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <Image
        data-aos="fade-left"
        className="md:w-1/2"
        src="/girl-with-books.png"
        alt="Girl with books"
        width={682}
        height={611}
      />
    </div>
  );
}
