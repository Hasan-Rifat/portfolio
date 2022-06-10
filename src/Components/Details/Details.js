import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [website, setWebsite] = useState([]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Hasan-Rifat/portfolio/main/public/fake.json/${id}`
    )
      .then((res) => res.json())
      .then((data) => setWebsite(data));
  }, [id]);
  console.log(website);
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2>details {id}</h2>
    </div>
  );
};

export default Details;
