import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2>details {id}</h2>
    </div>
  );
};

export default Details;
