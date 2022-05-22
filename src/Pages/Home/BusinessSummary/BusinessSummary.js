import React from "react";
const BusinessSummary = () => {
  return (
    <div>
      <h1 className="text-3xl text-center uppercase mt-10 font-bold text-secondary">
        Millions business trust us
      </h1>
      <h1 className="text-purple-600 uppercase text-center">
        try to understand users expectation
      </h1>
      <div class="mt-10 mb-20 stats stats-vertical lg:stats-horizontal shadow w-full text-center">
        <div class="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-1/4 mx-auto"
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
          <div class="stat-value">65</div>
          <div class="stat-title text-secondary">Countries</div>
        </div>

        <div class="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-1/4 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="stat-value">500+</div>
          <div class="stat-title text-secondary">Completes Projects</div>
        </div>

        <div class="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-1/4 mx-auto"
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
          <div class="stat-value">1000+</div>
          <div class="stat-title text-secondary">Happy Client</div>
        </div>
        <div class="stat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-1/4 mx-auto"
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
          <div class="stat-value">432+</div>
          <div class="stat-title text-secondary">Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
