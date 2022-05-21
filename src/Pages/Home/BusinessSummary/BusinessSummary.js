import React from "react";
const BusinessSummary = () => {
  return (
    <div> 
        <h1 className="text-3xl text-center uppercase mt-10 font-bold text-secondary">Millions business trust us</h1>
        <h1 className="text-purple-600 uppercase text-center">try to understand users expectation</h1>
        <div class="mt-10 mb-20 stats stats-vertical lg:stats-horizontal shadow w-full text-center">
        
        <div class="stat">
        <div class="stat-title">New Users</div>
          <div class="stat-value">65</div>
          <div class="stat-title text-secondary">Countries</div>
        </div>
  
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">500+</div>
          <div class="stat-title text-secondary">Completes Projects</div>
        </div>
  
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1000+</div>
          <div class="stat-title text-secondary">Happy Client</div>
        </div>
        <div class="stat">
        <div class="stat-title">New Users</div>
          <div class="stat-value">432+</div>
          <div class="stat-title text-secondary">Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
