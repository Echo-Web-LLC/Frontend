import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

const Cards = React.forwardRef((props, ref) => {
    return (
<>
  <Helmet>
        <title> Echo Web, LLC </title>
        <meta
          name="Landing Page"
          content="List of services from Echo Web, LLC."
        />
  </Helmet>
<section
  className="servicesCTASection bg-blue-50"
>
  <div
    class="absolute inset-0 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-gray-700">
          Forever Home.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
</>
    );
});

export default Cards;