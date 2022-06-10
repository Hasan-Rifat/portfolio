import React from "react";
import img1 from "../../img/project3.png";

const Project3 = () => {
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
            CAR DEALERSHIP COMPLETE AUTO SERVICES
          </h1>
          <p class="mb-2 text-white">
            With specialists on hand to help with any part of the car shopping
            or vehicle ownership experience, Motors provides financing, car
            service and a great selection of vehicles for luxury car shoppers in
            Chicago, IL. Motors is ultimate Automotive, Auto Services.
          </p>
          <ul className="text-primary py-4">
            <li className="list-disc">
              This website is a car inventory management website
            </li>
            <li className="list-disc">Products can be added</li>
            <li className="list-disc">The product can be updated</li>
            <li className="list-disc">The product can be removed</li>
            <li className="list-disc">
              You can see how many products you have added in my items
            </li>
          </ul>
          <div class="flex justify-center">
            <button class="mr-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a href="https://assignment-11-306c4.web.app/">Live Site</a>
            </button>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="https://github.com/Hasan-Rifat/warehouse-management-client-side">
                client Code
              </a>
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a href="https://github.com/Hasan-Rifat/warehouse-management-server">
                server Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
