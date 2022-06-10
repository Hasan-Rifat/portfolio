import React from "react";

const Contact = () => {
  return (
    <section class="gradient-bg-transactions text-gray-600 body-font relative py-24 ">
      {
        <div className="max-w-7xl mx-auto px-4">
          <h1 class="sm:text-[36px] md:text-[48px] font-extrabold mb-4 text-white text-center py-10">
            <span class="text-primary"> Contact</span> me
          </h1>
          <div class="  flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14639.925834383414!2d91.17637558193876!3d23.461133292069093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1654882261932!5m2!1sen!2sbd"
                //   style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
              ></iframe>
              <div class="bg-white relative flex flex-wrap p-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p class="mt-1">Cmilla, Bangladesh</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    contacthasanrifat@gmail.com
                  </a>
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p class="leading-relaxed">(+88) 01768227738</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-[#161b22] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-10">
              <h2 class="sm:text-[26px] font-extrabold mb-4 text-white text-primary">
                Have any questions?
              </h2>
              <p class="leading-relaxed mb-5 text-white">let me know</p>
              <form>
                <div class="relative my-4">
                  <input
                    placeholder="your name"
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div class="relative my-6">
                  <input
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div class="relative my-4">
                  <textarea
                    required
                    placeholder="Message"
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  class="btn2 px-10 py-4 relative border border-[#ef0963] uppercase font-semibold tracking-wider leading-none overflow-hidden rounded text-lg text-white hover:text-white"
                  type="Submit"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-[#f61b10] to-[#ef0963] uppercase"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold uppercase">
                    Submit
                  </span>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default Contact;
