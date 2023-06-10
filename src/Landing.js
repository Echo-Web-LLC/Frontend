import React, { useEffect, useRef } from "react";
import Cards from "./Cards";
import About from "./About";
import FooterCTA from "./FooterCTA";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from 'react-helmet-async'

const Landing = () => {
  const cardsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const cardsControls = useAnimation();
  const aboutControls = useAnimation();
  const footerControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const cardsContainerTop = cardsRef.current?.offsetTop || 0;
      const aboutContainerTop = aboutRef.current?.offsetTop || 0;
      const footerContainerTop = footerRef.current?.offsetTop || 0;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > cardsContainerTop - windowHeight + 100) {
        cardsControls.start({ opacity: 1 });
      } else {
        cardsControls.start({ opacity: .34 });
      }

      if (scrollY > aboutContainerTop - windowHeight + 100) {
        aboutControls.start({ opacity: 1 });
      } else {
        aboutControls.start({ opacity: .34 });
      }

      if (scrollY > footerContainerTop - windowHeight + 100) {
        footerControls.start({ opacity: 1 });
      } else {
        footerControls.start({ opacity: .34 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cardsControls, aboutControls, footerControls]);

  return (
    <>
    <Helmet>
      <title> Landing Page </title>
      <meta name='Landing Page' content='Call to actions and information about Echo Web, LLC.' />
    </Helmet>
      <title> landing page </title>
      <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      <section id="fade-in" className="overflow-hidden bg-gray-50 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-lg text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="flex justify-center text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold lg:text-left text-gray-900 text-center">
              Unlock the Power of Minimalistic <br/> Design and User Experience <br/> for Your Business..
            </h1>

            <p className="hidden text-center text-gray-500 md:mt-4 md:block">
              Experience the difference of our comprehensive services <br/> encompassing design, development, maintenance, <br/>  and client collaboration today.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="https://"
                className="inline-block rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-indigo-400"
              >
                Start Today
              </a>
            </div>
          </div>
        </div>

        <div
          id="cta-banner-bg"
          className="object-cover sm:h-full opacity-85"
        ></div>
      </section>
      <div ref={cardsRef}>
        <motion.div
          initial={{ opacity: .34, y: 100 }}
          animate={cardsControls}
          transition={{ duration: 1 }}
        >
          <Cards/>
        </motion.div>
      </div>

      <div ref={aboutRef}>
        <motion.div
          initial={{ opacity: .34, y: 100 }}
          animate={aboutControls}
          transition={{ duration: 1 }}
        >
          <About/>
        </motion.div>
      </div>

      <div ref={footerRef}>
        <motion.div
          initial={{ opacity: 34, y: 100 }}
          animate={footerControls}
          transition={{ duration: 1 }}
        >
          <FooterCTA/>
        </motion.div>
      </div>
    </>
  );
}

export default Landing;
