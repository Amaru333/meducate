"use client";
import { GET_CERTIFICATE_ENDPOINT } from "@/constants/APIRoutes";
import httpRequest from "@/utils/httpRequest";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function CertificateIDPage() {
  const [certificateData, setCertificateData] = React.useState<any>();
  const params = useParams();
  React.useEffect(() => {
    httpRequest
      .get(GET_CERTIFICATE_ENDPOINT + "/" + params?.["certificate-id"])
      .then((res) => {
        setCertificateData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(certificateData);
  return (
    <div className="p-20">
      <div className="bg-white p-12 flex flex-col items-center">
        <p className="font-mono text-5xl font-semibold text-primary mb-10">CERTIFICATE</p>
        <Image alt="logo" src="/images/logo.png" width={200} height={0} sizes="100vw" className="object-contain rounded-2xl mb-10" />
        <p className="text-2xl font-semibold">{certificateData?.course?.title}</p>
        <hr className="w-96 my-4" />
        <p className="text-2xl font-light">{certificateData?.user?.email}</p>
        <p className="text-center mt-8 max-w-4xl">
          This is to certify that <span className="font-semibold">{certificateData?.user?.email}</span> has successfully completed the course
          <span className="font-semibold"> {certificateData?.course?.title}</span>. {certificateData?.description}
        </p>
        <p className="mt-12 text-xs text-gray-500">
          Certified: {moment(certificateData?.user?.createdAt).utc().format("MMMM D, YYYY")} - {moment(certificateData?.user?.createdAt).add(1, "year").utc().format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
}

export default CertificateIDPage;
