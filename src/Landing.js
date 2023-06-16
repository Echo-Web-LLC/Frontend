import React, { useState, useEffect, useRef } from "react";
import Cards from "./Cards";
import About from "./About";
import FooterCTA from "./FooterCTA";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import vid1 from './Images/navy.mp4';
import vid2 from './Images/blue.mp4';
import vid3 from './Images/red.mp4';
import { ScrollSnapContainer, ScrollSnapSection } from 'react-scroll-snap';
import './App.css';

const Landing = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [textChange, setTextChange] = useState([
    { className: "navy", content: "Minimalism.", videoIndex: 0 },
    { className: "cornflower", content: "Flow.", videoIndex: 1 },
    { className: "coral", content: "Impact.", videoIndex: 2 }
  ]);

  const videos = [vid1, vid2, vid3];
  const videoCount = videos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % textChange.length;
        setCurrentVideoIndex(textChange[newIndex].videoIndex);
        return newIndex;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [textChange.length]);

  const handleVideoEnd = () => {
    setCurrentTextIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % textChange.length;
      setCurrentVideoIndex(textChange[newIndex].videoIndex);
      return newIndex;
    });
  };

  const cardsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const cardsControls = useAnimation();
  const aboutControls = useAnimation();
  const footerControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const cardsContainerTop = cardsRef.current?.offsetTop || 0;
      const aboutContainerTop = aboutRef.current?.offsetTop || 0;
      const footerContainerTop = footerRef.current?.offsetTop || 0;

      const cardsVisible = scrollY > cardsContainerTop - windowHeight;
      const aboutVisible = scrollY > aboutContainerTop - windowHeight;
      const footerVisible = scrollY > footerContainerTop - windowHeight;

      cardsControls.start({ opacity: cardsVisible ? 1 : 0.34 });
      aboutControls.start({ opacity: aboutVisible ? 1 : 0.34 });
      footerControls.start({ opacity: footerVisible ? 1 : 0.34 });
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
        <meta name='Landing Page' content='Call to actions and information about Echo Web, LLC.'/>
      </Helmet>
      <div>
        <section id="fade-in" className="overflow-hidden hadow-lg bg-white">
          <video 
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="opacity-25 bg-cover object-cover w-full h-full fixed top-0 left-0 z-0"
        />
          <div>
            <div className="shadow-lg bg-gray-50 bg-opacity-75 rounded-md fade-in-comp mx-auto max-w-2xl text-center p-10 sm:p-32 lg:p-20">
              <h1 className="flex justify-center lg:-mx-10 text-6xl lg:text-7xl font-bold text-center text-gray-900 opacity-100 drop-shadow-xl">
                Equip Your Brand.
              </h1>

              <h2 className="font-bold pt-2 text-5xl lg:text-6xl">
                <span className={textChange[currentTextIndex].className}>
                  {textChange[currentTextIndex].content}
                </span>
              </h2>

              <p className="text-4xl text-center justify-centertext-white my-2 md:block drop-shadow-xl text-black font-bold p-2 rounded-md">
                Less Clutter. <br/>
                More Value.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 justify-center opacity-100 gap-5">
                <a
                  className="group ring ring-gray-800 inline-block font-extrabold mt-2 rounded px-4 py-2 text-gray-900 text-2xl  transition focus:outline-none bg-opacity-90 hover:drop-shadow-lg"
                  id="colorfill"
                  href="https://demosite.app"
                >
                  <span className="font-bold text-gray-900 text-lg transition-all hover:drop-shadow-xl">
                    Learn More
                  </span>
                </a>

                <a
                  className="group ring ring-gray-800 inline-block font-extrabold mt-2 rounded px-4 py-2 text-gray-900 bg-opacity-75 bg-gray-900 text-2xl  transition focus:outline-none hover:drop-shadow-lg"
                  id="colorfill"
                  href="https://demosite.app"
                >
                  <span className="text-gray-50 font-bold text-lg transition-all hover:drop-shadow-xl">
                    Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-24" ref={cardsRef}>
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
};

export default Landing;