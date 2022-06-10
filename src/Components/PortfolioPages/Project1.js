import React from "react";

import img1 from "../../img/project1.png";

const Project1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-48">
      <div class="flex px-5 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={img1}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            The Watch Best smart watch
          </h1>
          <p class="mb-2 text-white">
            We test every new smartwatch to gauge its design and comfort. If
            it’s not stylish and comfortable enough to get you from an early
            morning workout to the office to a night out, you probably won’t
            wear it every day. Most smartwatches are also fitness trackers, so
            we put all of its sensors to the test, from step counts to heart
            rate to GPS (when applicable).
          </p>
          <ul className="text-primary py-4">
            <li className="list-disc">One product store</li>
            <li className="list-disc">landing website</li>
            <li className="list-disc">eCommerce store</li>
            <li className="list-disc">Best smart watch web store</li>
          </ul>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="https://hasan-rifat-assignment-9.netlify.app/">
                Live Site
              </a>
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a href="https://github.com/Hasan-Rifat/product-analysis-website">
                Code Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
