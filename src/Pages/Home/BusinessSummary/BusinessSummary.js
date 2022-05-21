import React from "react";
import BusinessCard from "./BusinessCard";
import flag from "../../../asstes/images/red-flag.png";
const BusinessSummary = () => {
  return (
    <div> 
        <h1 className="text-3xl text-center uppercase mt-5 font-bold text-secondary">Millions business trust us</h1>
        <h1 className="text-purple-600 uppercase text-center">try to understand users expectation</h1>
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full text-center">
        
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
  
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
  
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
