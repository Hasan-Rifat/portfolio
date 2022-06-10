import React from "react";
import img1 from "../../img/project2.png";

const Project2 = () => {
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
            Education website
          </h1>
          <p class="mb-2 text-white">
            Facing the study with the right mindset can change our chances of
            learning everything necessary. At the same time, having learned
            these contents will make our way of interpreting the world change.
          </p>
          <h2>Technology I used</h2>
          <ul className="text-primary py-4">
            <li className="list-disc">useFirebase</li>
            <li className="list-disc">useHook</li>
            <li className="list-disc">react-bootstrap</li>
            <li className="list-disc">home Page Responsive</li>
            <li className="list-disc">About Me page</li>
            <li className="list-disc">login</li>
            <li className="list-disc">Registration</li>
            <li className="list-disc">private Route</li>
          </ul>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="https://assignment-10-b8408.web.app/">Live Site</a>
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a href="https://github.com/Hasan-Rifat/independent-service-provider">
                Code Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
