import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = React.forwardRef((props, ref) => {
  return (
    <>
    <Helmet>
      <title> About </title>
      <meta name='about' content='Information on companies mission statement and expertise'/>
    </Helmet>
    <section ref={ref}>
        <div>      
            <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={'https://echowebllc.s3.amazonaws.com/Hotpot-pS-1ClOv7-transformed.png'}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-blue-200">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-300"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h1 class="text-3xl font-bold sm:text-4xl">
            About Echo Web, LLC..
          </h1>

          <p class="mt-4 text-gray-700 font-medium">
            Echo Web LLC specializes in creating sleek and effective websites that prioritize minimalism and quality. Our teams work efficiently to craft websites that are both visually stunning and highly functional.
          </p>
          <br/>
          <div class="bg-blue-300 hover:bg-blue-200 p-10">
           <h2 class="text-2xl font-bold sm:text-3xl text-gray-700">
            Mission Statement..
          </h2>

          <p class="mt-4 text-gray-600 font-semibold hover:bg-blue-200 bg-blue-400 p-5">
            At Echo Web LLC, our mission is to leverage the power of web design and development as a mode and medium to help people. We are driven by a passion for growth and scalability. 
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>      
        </div>
</section>
 </>

    );
});

export default About;