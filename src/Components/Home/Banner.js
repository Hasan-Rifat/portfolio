import React from "react";
import banner from "../../img/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section class="py-24 gradient-bg-transactions">
      <div class="max-w-7xl mx-auto px-4 ">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 items-center">
          <div class="">
            <h1 class=" text-[48px] font-extrabold mb-4 text-white leading-[70px]">
              Hi, I’m <span class="text-primary"> Hasan Rifat, </span> <br />
              Full stack developer <br />
              based in Bangladesh.
            </h1>

            <div class="">
              <button
                class="btn2 mt-12 px-10 py-4 relative border border-[#ef0963] uppercase font-semibold tracking-wider leading-none overflow-hidden rounded text-lg text-primary hover:text-white"
                type="button"
              >
                <a
                  href="https://drive.google.com/file/d/1owl5-cJ4NKq7qPuVBTEp5Bu_b7ol-z8b/view?usp=sharing"
                  target="blank"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-[#f61b10] to-[#ef0963] uppercase"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold uppercase">
                    Download CV
                  </span>
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div class="mt-12">
            <img class="rounded-3xl" alt="hero" src={banner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
