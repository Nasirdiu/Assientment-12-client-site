import React from "react";
import { Link } from "react-router-dom";
import nasir from "../../../asstes/nasir.jpg";
const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-center uppercase text-secondary mt-10 ">
        My profile
      </h1>
      <div class="hero min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={nasir} />
              </div>
            </div>
            <h1 class="text-3xl font-bold ">Md.Nasir Uddin</h1>
            <p class="py-3 text-3xl">
              Educational: Dhaka International University. <br />
              Department:BSC In Computer Science And Engineering.
            </p>
            <p class="py-3 text-1xl">Email:nasir.joypurhat@gmail.com</p>
            <p class="py-3 text-2xl">web developer Skill</p>
            <div className="text-3xl">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Tailwind Css</p>
              <p>Javascript</p>
              <p>React js</p>
              <p>Node Js</p>
              <p>Express Js</p>
              <p>Mongo DB</p>
            </div>

            <div className="text-3xl mt-10">
              <h1 className="text-secondary">Project Link:</h1>
              <a className="font-bold text-red-500" target="_blank" href="https://electronics-warehouse-56938.web.app/">Link 1</a><br />
              <a className="font-bold text-red-500" target="_blank"  href="https://assignment-project-a39e6.web.app/">Link 2</a><br />
              <a className="font-bold text-red-500" target="_blank" href="https://bike-suzuki-gixxer.netlify.app/">Link 3</a><br />
              <a className="font-bold text-red-500" target="_blank" href="https://wonderful-rugelach-22bd87.netlify.app/">Link 4</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
