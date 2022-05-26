import React from "react";
import { Link } from "react-router-dom";
import nasir from "../../../asstes/nasir.jpg";
const About = () => {
  return (
    <div className="bg-slate-700">
      <h1 className="text-3xl text-center uppercase text-secondary mt-10 ">
        My profile
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={nasir} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white ">Md.Nasir Uddin</h1>
            <p className="py-3 text-3xl text-white">
              Educational: Dhaka International University. <br />
              Department:BSC In Computer Science And Engineering.
            </p>
            <p className="py-3 text-1xl text-white">Email:nasir.joypurhat@gmail.com</p>
            <p className="py-3 text-2xl text-white">web developer Skill</p>
            <div className="text-3xl grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
              <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Html 5
              </div>
              <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Css 3
              </div>
              <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                Bootstrap
              </div>
              <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Tailwind Css
              </div>
              <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Javascript
              </div>
              <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                React js
              </div>
              <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                Node Js
              </div>
              <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                Express Js
              </div>
              <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
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
