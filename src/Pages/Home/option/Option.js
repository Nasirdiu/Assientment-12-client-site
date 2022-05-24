import React from "react";
import car from "../../../asstes/car.jpg";
const Option = () => {
  return (
    <div className="bg-zinc-200">
      <h1 className="text-secondary text-center text-3xl uppercase font-bold">Car Body</h1>
      <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={car} class=" rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold text-secondary"> Toyota Car Body </h1>
          <p class="py-6">
            Toyota Motor Corporation's vehicle production system is a way of
            making things that is sometimes referred to as a "lean manufacturing
            system," or a "Just-in-Time (JIT) system," and has come to be well
            known and studied worldwide. This production control system was
            established based on many years of continuous improvements, with the
            objective of making the vehicles ordered by customers in the
            quickest and most efficient way, in order to deliver the vehicles as
            swiftly as possible. The Toyota Production System (TPS) was
            established based on two concepts: "jidoka" (which can be loosely
            translated as "automation with a human touch"), as when a problem
            occurs, the equipment stops immediately, preventing defective
            products from being produced; and the "Just-in-Time" concept, in
            which each process produces only what is needed for the next process
            in a continuous flow.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Option;
