import Link from "next/link";
import React from "react";

function CoursesPage() {
  return (
    <div>
      <Link href="/dashboard/courses/how-to-do-surgery">
        <p>How to do surgery</p>
      </Link>
    </div>
  );
}

export default CoursesPage;
