import React from "react";
import error from "../asstes/error/error.jpg";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold text-red-600">
        Page Not Fount 404
      </h1>
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
