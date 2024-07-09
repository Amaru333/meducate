import React from "react";
import ContinueCourseCard from "./ContinueCourseCard";
import SummaryCard from "./SummaryCard";
import WatchtimeChart from "./WatchtimeChart";
import RecommendedSection from "./RecommendedSection";

function DashboardPage() {
  return (
    <div>
      <p className="text-2xl font-semibold mb-6 w-full border-b pb-4">Dashboard</p>
      <p className="text-lg">
        Welcome back <span className="font-semibold">Full Name!</span> Continue from where you left
      </p>
      <div className="grid grid-cols-12 gap-8 mt-4">
        <div className="col-span-8">
          <ContinueCourseCard />
          <RecommendedSection />
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <SummaryCard />
          <WatchtimeChart />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
