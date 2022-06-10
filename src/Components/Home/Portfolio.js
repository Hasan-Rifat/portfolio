import React from "react";
import { Link, useNavigate } from "react-router-dom";

import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";

export const project = [
  {
    img: img1,
    text: "Portfolio",
    _id: 1,
    url: "/project2",
  },
  {
    img: img2,
    text: "Portfolio",
    _id: 2,
    url: "/project1",
  },
  {
    img: img3,
    text: "Portfolio",
    _id: 3,
    url: "/project3",
  },
];

const Portfolio = () => {
  //! working when added backend
  /* const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/details/${id}`);
  }; */
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <>
          <h1 class="sm:text-[36px] md:text-[48px] font-extrabold mb-4 text-white leading-[70px] text-center">
            My <span class="text-primary"> Portfolio</span>
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
            {project.map((s, index) => (
              <div className="rounded-2xl shadow-2xl w-full">
                <div className="card-body justify-center">
                  <div className="avatar">
                    <div className="w-80 mx-auto rounded">
                      <img src={s.img} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-xl text-accent text-center py-4 my-2">
                      <small>
                        <Link to={s.url}>
                          <button
                            // onClick={() => handleDetail(s._id)} ///! add backend
                            className=" p-4 border-none hover:bg-[#161b22] bg-primary  text-white  font-semibold px-8 py-3  rounded-2xl shadow-2xl"
                          >
                            {s.text}
                          </button>
                        </Link>
                        {/* <button
                          // onClick={() => handleDetail(s._id)} ///! add backend
                          className=" p-4 border-none hover:bg-[#161b22] bg-primary  text-white  font-semibold px-8 py-3  rounded-2xl shadow-2xl"
                        ></button> */}
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
