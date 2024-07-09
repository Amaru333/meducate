import Link from "next/link";
import React from "react";
import { FaPlay, FaQuestion } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DUMMY_COURSE_ITEMS } from "@/constants/dummyData";
import { formatSeconds } from "@/utils/functions";

function IndividualCoursePage() {
  return (
    <div>
      <div className="max-w-screen-md">
        <p className="text-4xl font-semibold">How to do a surgery</p>
        <p className="mt-3 text-gray-700">Adipisicing eu ut enim aute voluptate. Duis exercitation enim nulla in nisi dolor ullamco quis pariatur occaecat. Sunt proident irure pariatur occaecat. Esse velit labore ut fugiat proident.</p>
      </div>
      <div className="mt-10 mb-12">
        <div className="flex gap-x-4 text-gray-700">
          <div className="flex gap-x-2 items-center">
            <FaPlay className="text-xs" />
            <p className="text-sm">10 lectures</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <FaQuestion className="text-sm" />
            <p className="text-sm">100 quizzes</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoTime className="text-sm" />
            <p className="text-sm">100 minutes</p>
          </div>
        </div>
      </div>
      <Link href="/dashboard/courses/how-to-do-surgery/1">
        <button className="bg-primary px-20 py-3 text-white rounded-xl bg-opacity-100 hover:bg-opacity-90transition-all active:scale-95">Start course</button>
      </Link>
      <p className="text-xs mt-2">
        <span className="font-bold">1,000,000</span> people have completed this course
      </p>
      <div className="mt-16">
        <p className="text-2xl font-semibold">Course outline</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md py-2 px-4 mt-4">
        {DUMMY_COURSE_ITEMS.map((item, idx) => (
          <Accordion type="single" collapsible key={idx}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex">
                <div className="flex items-center gap-x-4">
                  <FaPlay className="w-3 h-3" /> {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.description}</p>
                <p className="text-xs font-light text-gray-500 mt-4">Lecture duration: {formatSeconds(item.duration)} mins</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default IndividualCoursePage;
