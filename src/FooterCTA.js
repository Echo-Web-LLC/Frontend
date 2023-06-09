import React from 'react';
import { Helmet } from 'react-helmet-async';

const FooterCTA = React.forwardRef((props, ref) => {

    const date = new Date();
    const year = date.getFullYear();

return (      
<>
<Helmet>
      <title> Echo Web, LLC </title>
      <meta name='Footer' content='Contains Call to Action'/>
</Helmet>
<section ref={ref}>
<div>
<section class="bg-[url('https://echowebllc.s3.amazonaws.com/Hotpot_(2)-UBgTZ3CpW-transformed.png')] bg-cover bg-bottom">
  <div class="p-8 md:p-12 lg:px-16 lg:py-8">
    <div class="mx-auto max-w-lg text-center p-20 bg-teal-300 shadow-xl">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Let's Make Your Website Happen
      </h2>

      <p class="hidden font-extrabold text-xl text-gray-700 sm:mt-4 sm:block">
        Click to get your quote and we will get back to you as soon as we can! 
      </p>

    </div>

    <div class="flex justify-center pt-6">
        <button>
        <a href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK" class="inline-block rounded bg-teal-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-400 focus:outline-none focus:ring focus:ring-indigo-400">
          Get Quote
        </a>
        </button>
    </div>
  </div>
</section>
 <p class="flex justify-center text-xs sm:text-sm text-center text-gray-400">
            Copyright &copy; {year}
        </p>
</div>
</section>
</>
    );
});

export default FooterCTA;