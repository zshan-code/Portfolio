import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Technical Skills - zshan | Python, Django, React, SQL Expert",
  description:
    "Technical skills and expertise of zshan: Frontend (Bootstrap, React), Backend (Django, Flask, FastAPI, Spring Boot), Databases (SQL, MongoDB, PostgreSQL), and more.",
  keywords:
    "Technical Skills, zshan Skills, Python Developer, Django Expert, React Developer, Backend Skills, Full Stack Developer Faisalabad",
  openGraph: {
    title: "Technical Skills - zshan",
    description:
      "My technical skills and expertise in modern software development",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills - zshan",
    description: "My technical skills and expertise",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Skills />;
}
