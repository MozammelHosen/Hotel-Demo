import React from "react";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div>
      <div className="stats bg-primary text-primary-content w-full mt-5 h-40">
        <div className="stat">
          <div className="stat-title text-xl font-bold text-purple-600">
            Advanced Amount
          </div>
          <div className="stat-value text-white">$ 400</div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl font-bold text-purple-600">
            Duo Amount
          </div>
          <div className="stat-value text-white">$ 6300</div>
        </div>
        <div className="stat">
          <div className="stat-title text-xl font-bold text-purple-600 ">
            Total Amount
          </div>
          <div className="stat-value text-white">$ 9,400</div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl font-bold text-purple-600">
            Current balance
          </div>
          <div className="stat-value text-white">$89,400</div>
        </div>
      </div>
      <div className="card w-96 bg-primary text-primary-content text-center mt-10 mx-auto">
        <div className="card-body">
          <h2 className="text-center text-xl font-sans font-bold text-white">Cash Out Balance</h2>
         <input className="pl-5" type="text" name="" id="" placeholder="Enter Check Out Amount" />
          <div className="card-actions justify-center">
            <button className="btn btnn">Cash Confirm </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
