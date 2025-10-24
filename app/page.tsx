import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Trusted from "@/components/trusted";
import AllInOne from "@/components/all-in-one";
import WhatIs from "@/components/what-is";
import Tools from "@/components/tools";
import Assessments from "@/components/assesments";
import OneToOne from "@/components/one-to-one";
import Integrations from "@/components/integrations";
import News from "@/components/news";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import ClassManagement from "@/components/class-management";
import NavBarMobile from "@/components/navbar-mobile";

export default function Home() {
  return (
    <>
      <header role="banner">
        <NavBar />
        <NavBarMobile />
      </header>

      <main id="main-content" role="main">
        <Hero />
        <div className="container px-4 lg:px-8 mx-auto max-w-7xl text-gray-700 overflow-x-hidden">
          <Trusted />
          <AllInOne />
          <WhatIs />
          <Tools />
          <Assessments />
          <ClassManagement />
          <OneToOne />
          <Integrations />
          <Testimonials />
          <News />
        </div>
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
}
