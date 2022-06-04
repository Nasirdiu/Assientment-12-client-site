import React from "react";
import img from "../../../asstes/images/Ellipse 90.png";
import img1 from "../../../asstes/images/Ellipse 91.png";
import img2 from "../../../asstes/images/Ellipse 92.png";
const Ceo = () => {
  return (
    <div className="mt-16">
      <h1 className="text-accent text-center text-3xl uppercase font-bold">
        Company CEO
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={img} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">ceo,manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </div>
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={img1} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">ceo,manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </div>
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={img2} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">ceo,manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
