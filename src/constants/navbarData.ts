import { CiTrophy } from "react-icons/ci";
import { LiaBookMedicalSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";

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
    title: "Certificates",
    icon: PiCertificate,
    link: "/dashboard/certificates",
  },
  {
    title: "Settings",
    icon: CiSettings,
    link: "/dashboard/settings",
  },
];
