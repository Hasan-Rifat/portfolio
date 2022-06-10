import React from "react";
import Service from "./Service";
import { CgWebsite } from "react-icons/cg";
import { MdShoppingCart, MdSyncProblem } from "react-icons/md";

const Services = () => {
  const service = [
    {
      _id: 1,
      heading: "React Application",
      text: "I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.",
      icon: <CgWebsite />,
      color: "text-secondary",
    },
    {
      _id: 2,
      heading: "Online store & shopping",
      text: "I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.",
      icon: <MdShoppingCart />,
      shadow: "bg-gradient-to-r from-[#f61b10] to-[#ef0963]",
      color: "text-white",
    },
    {
      _id: 3,
      heading: "Fixing problems",
      text: "Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.",
      icon: <MdSyncProblem />,
      color: "text-secondary",
    },
  ];
  return (
    <section class="gradient-bg-services py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4">
        <div>
          <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {/*  */}
            {service.map((s) => (
              <Service s={s} key={s._id} />
            ))}
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
