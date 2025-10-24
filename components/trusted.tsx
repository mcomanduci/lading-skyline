"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function Trusted() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center mb-3 text-gray-400 font-medium">
        Trusted by 5,000+ Companies Worldwide
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <Image
          className="h-7 w-auto"
          src="/company/google.svg"
          alt="Google"
          width={169}
          height={56}
        />
        <Image
          className="h-7 w-auto"
          src="/company/netflix.svg"
          alt="Netflix"
          width={152}
          height={41}
        />
        <Image
          className="h-7 w-auto"
          src="/company/airbnb.svg"
          alt="Airbnb"
          width={162}
          height={51}
        />
        <Image
          className="h-7 transform translate-y-2"
          src="/company/amazon.svg"
          alt="Amazon"
          width={154}
          height={47}
        />
        <Image
          className="h-7 w-auto"
          src="/company/facebook.svg"
          alt="Facebook"
          width={194}
          height={40}
        />
        <Image
          className="h-7 w-auto"
          src="/company/grab.svg"
          alt="Grab"
          width={132}
          height={52}
        />
      </div>
    </div>
  );
}
