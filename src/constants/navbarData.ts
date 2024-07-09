import { FaBookMedical, FaTrophy } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { LiaBookMedicalSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { GoHome } from "react-icons/go";

export const navbarData = [
  {
    title: "Dashboard",
    icon: GoHome,
    link: "/dashboard/home",
  },
  {
    title: "Courses",
    icon: LiaBookMedicalSolid,
    link: "/dashboard/courses",
  },
  {
    title: "Progress",
    icon: CiTrophy,
    link: "/dashboard/progress",
  },
  {
    title: "Settings",
    icon: CiSettings,
    link: "/dashboard/settings",
  },
];
