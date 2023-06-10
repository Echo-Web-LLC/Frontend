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
      <title> Echo Web, LLC  </title>
      <meta name='Landing Page' content='Call to actions and information about Echo Web, LLC.' />
    </Helmet>
      <title> landing page </title>
      <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      <section id="fade-in" className="overflow-hidden bg-gray-50 grid grid-cols-1  xl:grid-cols-2 ">
        <div className="p-8 md:p-12 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-lg text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="flex justify-center lg:-mx-2 text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold xl:text-left text-gray-900 text-center">
              Unlock the Power of Minimalistic Design and User Experience for Your Business..
            </h1>

            <p className="hidden text-center lg:-mx-2 xl:text-left text-gray-500 md:mt-4 md:block">
              Experience the difference of our comprehensive services encompassing design, development, maintenance,  and client collaboration today.
            </p>

            {/* <div className="mt-4 md:mt-8 flex justify-center lg:justify-start">
              <a
                className="inline-block rounded bg-gray-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-700"
                href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK"
              >
                Start Today
              </a>
            </div> */}
            <a
            class="group relative xl:right-1/3 inline-block mt-4 rounded bg-gray-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
            href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK"
          >
              <span class="absolute -end-full transition-all group-hover:end-4">
                <svg
                  class="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-xs sm:text-sm font-medium transition-all group-hover:me-4">
                Let's Connect
              </span>
            </a>
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
