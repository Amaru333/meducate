"use client";

import { DUMMY_COURSES } from "@/constants/dummyData";
import React, { useEffect } from "react";
import CertificateProgressCard from "./CertificateProgressCard";
import httpRequest from "@/utils/httpRequest";
import { GET_CERTIFICATES_ENDPOINT } from "@/constants/APIRoutes";

function CertificatePage() {
  const [certificatesList, setCertificatesList] = React.useState([]);
  useEffect(() => {
    httpRequest
      .get(GET_CERTIFICATES_ENDPOINT)
      .then((res) => {
        setCertificatesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(certificatesList);
  return (
    <div>
      <p className="text-2xl font-semibold mb-4">Certificates</p>
      {certificatesList.length > 0 && (
        <div className="bg-white rounded-2xl shadow-md p-4">
          {certificatesList.map((course, idx) => (
            <div key={idx}>
              <CertificateProgressCard course={course} />
              {idx !== DUMMY_COURSES.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
