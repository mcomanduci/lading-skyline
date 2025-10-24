"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function Assessments() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
      <div data-aos="fade-right" className="md:w-6/12">
        <div className="md:w-11/12 relative">
          <Image
            className=""
            src="/true-false.png"
            alt="True/False Assessment"
            width={670}
            height={724}
          />
        </div>
      </div>
      <div data-aos="fade-left" className="md:w-6/12 md:transform ">
        <h2 className="font-semibold text-darken text-3xl lg:pr-64">
          Assessments, <span className="text-yellow">Quizzes</span>, Tests
        </h2>
        <p className="text-gray-500 my-5 lg:pr-52">
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
}
