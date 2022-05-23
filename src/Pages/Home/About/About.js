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
            <div className="text-3xl grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
              <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Html 5
              </div>
              <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Css 3
              </div>
              <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                Bootstrap
              </div>
              <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Tailwind Css
              </div>
              <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Javascript
              </div>
              <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                React js
              </div>
              <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Node Js
              </div>
              <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Express Js
              </div>
              <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                Mongo DB
              </div>
            </div>

            <div className="text-3xl mt-10">
              <h1 className="text-secondary">Project Link:</h1>

              <a
                className="font-bold text-red-500 link link-secondary"
                target="_blank"
                href="https://electronics-warehouse-56938.web.app/"
              >
                Link 1
              </a>
              <br />
              <a
                className="font-bold text-red-500 link link-secondary"
                target="_blank"
                href="https://assignment-project-a39e6.web.app/"
              >
                Link 2
              </a>
              <br />
              <a
                className="font-bold text-red-500 link link-secondary"
                target="_blank"
                href="https://bike-suzuki-gixxer.netlify.app/"
              >
                Link 3
              </a>
              <br />
              <a
                className="font-bold text-red-500 link link-secondary"
                target="_blank"
                href="https://wonderful-rugelach-22bd87.netlify.app/"
              >
                Link 4
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
