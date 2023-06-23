import React, { useState, useEffect, useRef } from "react";
import Cards from "./Cards";
import About from "./About";
import FooterCTA from "./FooterCTA";
import { Helmet } from 'react-helmet-async';
import vid1 from './Images/onevideo.mp4';
import './App.css';

const Landing = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textChange, setTextChange] = useState([
    { className: "minimal", content: "Innovation."},
    { className: "flow", content: "Impact."},
    { className: "impact", content: "Results."},
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % textChange.length;
        return newIndex;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [textChange.length]);


  return (
    <>
      <Helmet>
        <title> Echo Web, LLC </title>
        <meta name='Landing Page' content='Call to actions and information about Echo Web, LLC.'/>
      </Helmet>
      <div className="grid grid-cols-1">
        <section id="fade-in" className="overflow flex justify-center items-center hadow-lg bg-white z-10">
          <video
          src={vid1}
          autoPlay
          muted
          className="opacity-100 bg-cover object-cover w-full h-full fixed top-0 left-0 -z-10"
        />
          <div>
            <div className="shadow-lg mb-40 hover:shadow-2xl bg-gray-50 bg-opacity-25 rounded-md fade-in-comp mx-auto max-w-2xl text-center p-10 sm:p-32 lg:p-20">
              <h1 className="flex justify-center lg:-mx-10 text-6xl lg:text-7xl font-bold text-center text-gray-900 drop-shadow-xl">
                Equip Your Brand
              </h1>

              <h2 className="font-bold pt-2 text-5xl lg:text-6xl">
                <span className={textChange[currentTextIndex].className}>
                  {textChange[currentTextIndex].content}
                </span>
              </h2>

              <p className="text-4xl text-center justify-centertext-white my-2 md:block drop-shadow-xl text-gray-800 font-bold p-2 rounded-md">
                {/* Tested for Innovation
                <br/>
                Designed for Impact
                <br/>
                Engineered for Results */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
       
       <div>
            <Cards/>
        </div>

        <div>
            <About/>
        </div>

        <div>
            <FooterCTA/>
        </div>
      </div>
    </>
  );
};

export default Landing;