import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

const Cards = React.forwardRef((props, ref) => {
    return (
<>
<section
  class="relative bg-[url('./Images/demo-4.jpg')] bg-cover bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-700">
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
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
{/* <div className="bg-image-opac">
<div className="bg-bottom pb-32">
<Helmet>
      <title> Echo Web, LLC </title>
      <meta name='Footer' content='Information about services provided by Business'/>
</Helmet>
<section ref={ref}>
    <h1 class="flex justify-center text-5xl lg:text-6xl font-semibold text-gray-50 py-12">
      Services
    </h1>
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 px-10 xl:px-40">
        <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Girl Thinking"
    src={'https://echowebllc.s3.amazonaws.com/Hotpot_(1)-transformed.png'}
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 sm:p-6 h-auto 2xl:h-80">

      <h3 class="mt-0.5 text-2xl text-gray-900">
        Web Design
      </h3>

    <p class="mt-2 text-xs/relaxed xl:text-sm/relaxed text-gray-500">
    At Echo Web, LLC, we offer web design services that are a powerful step in the overall process of establishing a compelling online presence. Web design serves as the gateway to your brand, providing a visually captivating and user-friendly platform for engaging with your audience.
    </p>
    <ul class="mt-2 text-md/relaxed text-gray-700">
        <span class="font-bold"> Highlights: </span>
        <li>✅ Brochure Sites</li>
        <li>✅ Ecommerce Design</li>
        <li>✅ Website Redesign</li>
    </ul>
  </div>
</article>
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="A Laptop Computer"
    src={'https://echowebllc.s3.amazonaws.com/Hotpot_(2)-UBgTZ3CpW-transformed.png'}
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 sm:p-6 h-auto 2xl:h-80">


      <h3 class="mt-0.5 text-2xl text-gray-900">
        Web Development
      </h3>

    <p class="mt-2 text-xs/relaxed xl:text-sm/relaxed text-gray-500">
      By developing the design ourselves, we can ensure that every aspect of the user experience is carefully executed. This includes optimizing page loading times, implementing responsive design for various devices, and integrating interactive elements that enhance user engagement.
    </p>
      <ul class="mt-2 text-md/relaxed text-gray-700">
        <span class="font-bold"> Highlights: </span>
        <li>✅ Efficient Rendering </li>
        <li>✅ Scalability and Performance </li>
        <li>✅ Mobile Friendly </li>
    </ul>
  </div>
</article>
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="A Laptop Computer"
    src={'https://echowebllc.s3.amazonaws.com/Hotpot_(4)-transformed.png'}
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 h-auto 2xl:h-80">

      <h3 class="mt-0.5 text-2xl text-gray-900">
        Maintenance
      </h3>

    <p class="mt-2 text-xs/relaxed xl:text-sm/relaxed text-gray-500">
      By entrusting us with the maintenance of your website or application, you can have peace of mind knowing that it is in capable hands. We understand the intricacies of the code we have developed, allowing us to swiftly address any issues and minimize downtime.
    </p>
    <br/>
     <ul class="mt-2 text-md/relaxed text-gray-700">
        <span class="font-bold"> Highlights: </span>
        <li>✅ SEO: Search Engine Optimization</li>
        <li>✅ Easy Management of Content</li>
        <li>✅ Updating Website</li>
    </ul>
  </div>
</article>
    </div> */}
    {/* <div class="flex justify-center pb-10">
      <a
          href=""
        >
        <span class=" rounded bg-teal-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-400 focus:outline-none focus:ring focus:ring-indigo-400">
          Start Today
        </span>
        </a>
    </div> */}
{/* </section>
</div>
</div> */}
</>
    );
});

export default Cards;