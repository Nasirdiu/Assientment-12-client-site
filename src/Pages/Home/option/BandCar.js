import React from "react";
import Volkswagen from "../../../asstes/car logo/Volkswagen_logo_2019.svg.png";
import tasla from "../../../asstes/car logo/1813.png";
import hondai from "../../../asstes/car logo/Hyundai_628.png";
import bmw from "../../../asstes/car logo/download.jpg";
import daimler from "../../../asstes/car logo/download1.jpg";
import Cadillac from "../../../asstes/car logo/344051.jpg";
import Audi  from "../../../asstes/car logo/1280px-Audi_logo_detail.svg.png";
import Ferrari   from "../../../asstes/car logo/ferrari-logo-illustration.jpg";
import Mercedes    from "../../../asstes/car logo/download.png";
import Rolls    from "../../../asstes/car logo/rrrrrrr.jpg";
const BandCar = () => {
  return (
    <div className="mt-10  ">
      <h1 className="text-secondary text-center text-3xl uppercase font-bold">
        Band Car Visit Now
      </h1>
      <h1 className="text-red-500 text-center text-1xl uppercase font-bold">
      We have the tools of this band
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-12 mt-10">
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.mercedes-benz.com/en/">
              <img src={Mercedes } alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.rolls-roycemotorcars.com/">
              <img src={Rolls} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.hyundai.com/worldwide/en/vehicles">
              <img src={hondai} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.ferrari.com/">
              <img src={Ferrari } alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.daimlertruck.com/en/">
              <img src={daimler} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.vw.com/en.html">
              <img src={Volkswagen} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.toyota.com/">
              <img src={tasla} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.audi.com/">
              <img src={Audi } alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.bmw.com/en/index.html">
              <img src={bmw} alt="" />
            </a>
          </div>
        </div>
        <div class="avatar ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <a href="https://www.cadillac.com/">
              <img src={Cadillac} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandCar;
