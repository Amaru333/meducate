import { DUMMY_COURSES } from "@/constants/dummyData";
import React from "react";
import ProgressCards from "./ProgressCards";

function InProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      {DUMMY_COURSES.map((course, idx) => (
        <div key={idx}>
          <ProgressCards course={course} />
          {idx !== DUMMY_COURSES.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
}

export default InProgress;
