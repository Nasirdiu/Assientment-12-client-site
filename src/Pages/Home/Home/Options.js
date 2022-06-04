import React from "react";
import car from '../../../asstes/images/car.jpg'
const Options = () => {
  return (
    <div className="mt-40">
      <h1 className="text-accent text-center text-3xl uppercase font-bold">
        Car Discount
      </h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse mx-40">
          <img src={car} className=" rounded-lg shadow-2xl w-96 h-80" alt="" />
          <div >
            <h1 className="text-5xl font-bold text-accent">
              {" "}
              Mercedes-Benz Car Discount 50%{" "}
            </h1>
            <p className="py-6">
            Mercedes-Benz Motor Corporation's vehicle production system is a way of
              making things that is sometimes referred to as a "lean
              manufacturing system," or a "Just-in-Time (JIT) system," and has
              come to be well known and studied worldwide. This production
              control system was established based on many years of continuous
              improvements, with the objective of making the vehicles ordered by
              customers in the quickest and most efficient way, in order to
              deliver the vehicles as swiftly as possible. The Toyota Production
              System (TPS) was established based on two concepts: "jidoka"
              (which can be loosely translated as "automation with a human
              touch"), as when a problem occurs, the equipment stops
              immediately, preventing defective products from being produced;
              and the "Just-in-Time" concept, in which each process produces
              only what is needed for the next process in a continuous flow.
            </p>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
         
        </div>
      </div>
      </div>
    
  );
};

export default Options;
