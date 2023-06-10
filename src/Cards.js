import React from 'react';
import { Helmet } from 'react-helmet-async'
import './App.css';

const Cards = React.forwardRef((props, ref) => {
    return (
<div>
<Helmet>
      <title> Echo Web, LLC </title>
      <meta name='Footer' content='Information about services provided by Business'/>
</Helmet>
<section ref={ref}>
<div class="bg-teal-50">
    <h1 class="flex justify-center text-2xl font-semibold text-gray-900 pt-10 -mt-28">
        Our Services  
    </h1>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-10 p-10 px-10 xl:px-40">
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
    </div>
    {/* <div class="flex justify-center pb-10">
      <a
          href=""
        >
        <span class=" rounded bg-teal-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-400 focus:outline-none focus:ring focus:ring-indigo-400">
          Start Today
        </span>
        </a>
    </div> */}
</div>
</section>
</div>

    );
});

export default Cards;