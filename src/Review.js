import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // eslint-disable-next-line
  const [list, setList] = useState(people);
  const [count, setCount] = useState(0);
  console.log(count);

  const handleLeft = () => {
    setCount((prev) => prev + 1);
    if (count === list.length - 1) {
      setCount(0);
    }
  };
  const handleRight = () => {
    setCount((prev) => prev - 1);
    if (count === 0) {
      setCount(list.length - 1);
    }
  };

  return (
    <main className="container">
      <section className="img-container">
        <FaQuoteRight />
        <img className="person-img" src={list[count].image} alt="name" />
      </section>
      <section>
        <h4 className="author">{list[count].name}</h4>
        <h4 className="job">{list[count].job}</h4>
        <p>{list[count].text}</p>
        <FaChevronLeft onClick={handleLeft} className="prev-btn" />
        <FaChevronRight onClick={handleRight} className="prev-btn" />
      </section>
    </main>
  );
};

export default Review;
