"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function ClassManagement() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center mt-12">
      <div data-aos="fade-right" className="md:w-5/12">
        <h2 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
          <span className="text-yellow">Class Management</span> Tools for
          Educators
        </h2>
        <p className="my-5 lg:pr-14">
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
      <div className="md:w-7/12 relative">
        <Image
          data-aos="fade-left"
          src="/gradebook.png"
          alt="Gradebook"
          width={881}
          height={624}
        />
      </div>
    </div>
  );
}
