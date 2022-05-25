import React from "react";

const Blogs = () => {
  return (
    <div className=" m-10 bg-zinc-200 ">
      <div
        tabindex="0"
        class="collapse collapse-open border border-base-300 bg-base-100 rounded-box "
      >
        <div class="collapse-title text-xl font-medium text-secondary">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <p>
            To optimize React rendering, you need to make sure that components
            receive only necessary props. It will let you control the CPU
            consumption and avoid over-rendering unnecessary features. The
            solution is to create a functional component that will collect all
            props and redistribute them to other components.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-5"
      >
        <div class="collapse-title text-xl font-medium text-secondary">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p>
            5 Types of Application State in React and How They Help in State
            Management 1.Data State. ... 2.Control State. ... 3.Session State.
            ... 4.Location State. ... 5.Conclusion.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-5"
      >
        <div class="collapse-title text-xl font-medium text-secondary">
        How does prototypical inheritance work?
        </div>
        <div class="collapse-content">
          <p>
          Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.

          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-5"
      >
        <div class="collapse-title text-xl font-medium text-secondary">
        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </div>
        <div class="collapse-content">
          <p>
          Searching allows customers to find certain products that satisfy a set of criteria. In the Pioneer Cycling store, we implemented two types of searching—simple and advanced. Simple searches allow a customer to search the catalog for keywords. In an advanced search, a customer can also search using additional product attributes such as manufacturer, weight range, or part number.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-5"
      >
        <div class="collapse-title text-xl font-medium text-secondary">
        What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p>
          One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
