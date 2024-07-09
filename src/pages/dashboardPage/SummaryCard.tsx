import React from "react";

function SummaryCard() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <p className="text-2xl font-semibold pb-6">Your summary</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold">Courses Completed</p>
          <p className="text-7xl font-semibold text-primary">15</p>
        </div>
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold">Courses Ongoing</p>
          <p className="text-7xl font-semibold text-primary">7</p>
        </div>
        <div className="text-center col-span-2">
          <p className="mb-2 text-xs font-semibold">Time Spent</p>
          <p className="text-7xl font-semibold text-primary">
            15<span className="text-xs">hrs </span> &nbsp;22<span className="text-xs">mins</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
