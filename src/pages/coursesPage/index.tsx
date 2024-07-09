import Link from "next/link";
import React from "react";

function CoursesPage() {
  return (
    <div>
      <Link href="/dashboard/courses/1">
        <p>Course 1</p>
      </Link>
    </div>
  );
}

export default CoursesPage;
