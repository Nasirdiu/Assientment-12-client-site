import React from "react";
const BusinessSummary = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl text-center uppercase mt-10 font-bold text-accent">
        Business Summary
      </h1>
      <h1 className="text-purple-600 uppercase text-center">
        try to understand users expectation
      </h1>
      <div className="mt-10 mb-20 stats stats-vertical lg:stats-horizontal shadow w-full text-center">
        <div className="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </div>
          <div className="stat-value">100+</div>
          <div className="stat-title text-secondary">Customers</div>
        </div>

        <div className="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <div className="stat-value">500+</div>
          <div className="stat-title text-secondary">Tools</div>
        </div>

        <div className="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="stat-value">1000+</div>
          <div className="stat-title text-secondary">Happy Client</div>
        </div>
        <div className="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <div className="stat-value">33k+</div>
          <div className="stat-title text-secondary">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
