import React, { useState, useEffect, useRef } from "react";
import Cards from "./Cards";
import About from "./About";
import FooterCTA from "./FooterCTA";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from 'react-helmet-async'
import Nav from './Nav';
import './App.css'

const Landing = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [ textChange, setTextChange ] = useState([
    { className: "cornflower", content: "Minimalistic." },
    { className: "cornflower", content: "Flow." },
    { className: "cornflower", content: "Impactful." }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % textChange.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [textChange.length]);

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
        <title> Echo Web, LLC </title>
        <meta name='Landing Page' content='Call to actions and information about Echo Web, LLC.' />
      </Helmet>
      <div>
        <section id="fade-in" className="overflow-hidden shadow-2xl opacity-90">
          <Nav></Nav>
          <div>
            <div className="rounded-md fade-in-comp hover:shadow-2xl mx-auto max-w-lg text-center bg-blue-50 shadow-xl bg-opacity-50 p-10">
              <h1 className="flex justify-center lg:-mx-2 text-5xl lg:text-6xl font-bold text-gray-900 text-center opacity-100 drop-shadow-xl">
                Equip Your Brand.
              </h1>

              <h2 class="pt-3 font-bold text-5xl lg:text-6xl drop-shadow-xl">
                <span className={textChange[currentTextIndex].className}>
                  {textChange[currentTextIndex].content}
                </span>
              </h2>

              <p className="text-3xl text-center justify-centertext-white my-2 md:block drop-shadow-xl text-gray-800 font-bold p-2 rounded-md">
                Less Clutter. <br/>
                More Value.
              </p>

              {/* <div className="mt-4 md:mt-8 flex justify-center lg:justify-start">
                <a
                  className="inline-block rounded bg-gray-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-700"
                  href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK"
                >
                  Start Today
                </a>
              </div> */}
              <div className="flex justify-center opacity-100">
                <a
                   className="group inline-block font-extrabold mt-2 rounded shadow-lg hover:shadow-2xl px-7 py-2 text-gray-900 text-2xl  transition focus:outline-none bg-gray-50 ring bg-opacity-90"
                  id="colorfill"
                  href="https://demosite.app"
                >
                  <span className="font-bold text-gray-700 text-lg transition-all drop-shadow-xl">
                    Learn More
                  </span>
                </a>
              </div>
              <div className="flex justify-center opacity-100 mt-4">
                <a
                  className="group inline-block font-extrabold mt-2 rounded shadow-lg hover:shadow-2xl px-12 py-2 text-gray-900 text-2xl  transition focus:outline-none bg-blue-200 ring bg-opacity-90"
                  id="colorfill"
                  href="https://demosite.app"
                >
                  <span className="text-gray-700 font-bold text-lg transition-all drop-shadow-xl">
                    Demo
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <div
          id="cta-banner-bg"
          className="object-cover sm:h-full opacity-85"
        ></div> */}
        </section>
        <div ref={cardsRef}>
          <motion.div
            initial={{ opacity: 0.34, y: 100 }}
            animate={cardsControls}
            transition={{ duration: 1 }}
          >
            <Cards />
          </motion.div>
        </div>

        <div ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0.34, y: 100 }}
            animate={aboutControls}
            transition={{ duration: 1 }}
          >
            <About />
          </motion.div>
        </div>

        <div ref={footerRef}>
          <motion.div
            initial={{ opacity: 0.34, y: 100 }}
            animate={footerControls}
            transition={{ duration: 1 }}
          >
            <FooterCTA />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Landing;
