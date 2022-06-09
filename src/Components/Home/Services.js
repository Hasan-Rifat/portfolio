import React from "react";
import Service from "./Service";
import { CgWebsite } from "react-icons/cg";
import { MdShoppingCart, MdSyncProblem } from "react-icons/md";

const Services = () => {
  const service = [
    {
      _id: 1,
      heading: "React Application",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <CgWebsite />,
      color: "text-secondary",
    },
    {
      _id: 2,
      heading: "Online store & shopping",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <MdShoppingCart />,
      shadow: "bg-gradient-to-r from-[#f61b10] to-[#ef0963]",
      color: "text-white",
    },
    {
      _id: 3,
      heading: "Fixing problems",
      text: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <MdSyncProblem />,
      color: "text-secondary",
    },
  ];
  return (
    <section class="text-gray-600 body-font py-24">
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
