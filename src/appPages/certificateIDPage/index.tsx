import Image from "next/image";
import React from "react";

function CertificateIDPage() {
  return (
    <div className="p-20">
      <div className="bg-white p-12 flex flex-col items-center">
        <p className="font-mono text-5xl font-semibold text-primary mb-10">CERTIFICATE</p>
        <Image alt="logo" src="/images/logo.png" width={200} height={0} sizes="100vw" className="object-contain rounded-2xl mb-10" />
        <p className="text-2xl font-semibold">Surgery for Beginners Certification</p>
        <hr className="w-96 my-4" />
        <p className="text-2xl font-light">John Doe</p>
        <p className="text-center mt-8 max-w-4xl">
          This is to certify that <span className="font-semibold">John Doe</span> has successfully completed the course
          <span className="font-semibold"> Surgery for Beginners</span>. They have deemed the capability to perform surgeries on their own.
        </p>
        <p className="mt-12 text-xs text-gray-500">Certified: July 9, 2024 - Valid until: July 9, 2025</p>
      </div>
    </div>
  );
}

export default CertificateIDPage;
