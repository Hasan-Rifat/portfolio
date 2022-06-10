import React from "react";
import banner from "../../img/my-bg 2.png";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
const AboutMe = () => {
  const details = [
    {
      _id: "1",
      heading: "Quality",
      text: "Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project.",
      icon: <RiNumber1 />,
    },
    {
      _id: "2",
      heading: "Integrity",
      text: "Friendly coding and design professionality increase website speed and SEO result, only experienced person can make sure this.",
      icon: <RiNumber2 />,
    },
    {
      _id: "3",
      heading: "Security & Safety",
      text: "Get complete security website and safe your all data and information.",
      icon: <RiNumber3 />,
    },
    {
      _id: "4",
      heading: "Support",
      text: "Get life time working relationship & support with full instructions.",
      icon: <RiNumber4 />,
    },
  ];
  return (
    <section class="py-24 ">
      <div class="max-w-7xl mx-auto px-4 ">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div class="">
            <img class="rounded-3xl" alt="hero" src={banner} />
          </div>
          <div class="">
            <h1 class="sm:text-[36px] md:text-[48px] font-extrabold mb-4 text-white leading-[70px]">
              About <span class="text-primary"> Me </span> <br />
            </h1>
            <p class=" text-white text-xl font-normal">
              I m a self-learner person. I am constantly gaining new skills in
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </p>

            <div class="">
              <div class="">
                <div class="grid grid-cols-2 gap-4 pt-4">
                  {details.map((detail) => (
                    <div class=" ">
                      <div class="">
                        <div class="bg-[#ffe8ef] w-1/4  rounded-full ">
                          <span class="text-4xl text-primary text-center flex justify-center items-center p-4">
                            {detail.icon}
                          </span>
                        </div>
                        <div class="">
                          <h2 class="text-white text-xl font-bold py-2">
                            {detail.heading}
                          </h2>

                          <p class="text-white text-lg">{detail.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
