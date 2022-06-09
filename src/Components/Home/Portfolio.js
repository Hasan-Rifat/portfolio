import React from "react";

import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";

const Portfolio = () => {
  const project = [
    {
      img: img1,
      text: "Portfolio 1",
      id: 1,
      url: "https://assignment-10-b8408.web.app",
    },
    {
      img: img2,
      text: "Portfolio 2",
      id: 2,
      url: "https://hasan-rifat-assignment-9.netlify.app/",
    },
    {
      img: img3,
      text: "Portfolio 3",
      id: 3,
      url: "https://assignment-11-306c4.web.app/",
    },
  ];
  return (
    <section className="bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <>
          <h1 class="sm:text-[36px] md:text-[48px] font-extrabold mb-4 text-secondary leading-[70px] text-center">
            My <span class="text-primary"> Portfolio</span>
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
            {project.map((s, index) => (
              <div className=" shadow-2xl w-full">
                <div className="card-body justify-center">
                  <div className="avatar">
                    <div className="w-40 mx-auto rounded">
                      <img src={s.img} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-xl text-accent text-center py-4 my-2">
                      <small>
                        <a
                          className=" p-4 border-none hover:bg-secondary bg-primary  text-white  font-semibold px-8 py-3  rounded-2xl shadow-2xl"
                          href={s.url}
                        >
                          {s.text}
                        </a>
                      </small>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default Portfolio;
