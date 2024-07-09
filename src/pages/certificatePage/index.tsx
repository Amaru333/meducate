import { DUMMY_COURSES } from "@/constants/dummyData";
import React from "react";
import CertificateProgressCard from "./CertificateProgressCard";

function CertificatePage() {
  return (
    <div>
      <p className="text-2xl font-semibold mb-4">Certificates</p>
      <div className="bg-white rounded-2xl shadow-md p-4">
        {DUMMY_COURSES.map((course, idx) => (
          <div key={idx}>
            <CertificateProgressCard course={course} />
            {idx !== DUMMY_COURSES.length - 1 && <hr className="my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatePage;
