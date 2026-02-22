import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work Experience - zshan | Professional Journey",
  description:
    "Professional work experience and career journey of zshan. Internships at Rapidev and YoungDev Interns. Full-stack development experience with MERN stack, React.js, Node.js, and modern web technologies.",
  keywords:
    "Work Experience, Professional Experience, Software Developer Career, Full Stack Developer Journey, Internships, MERN Stack Experience, Web Development Career",
  openGraph: {
    title: "Work Experience - zshan",
    description: "My professional journey as a Full Stack Developer",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience - zshan",
    description: "My professional journey",
  },
  alternates: {
    canonical: "/experience",
  },
};


export default function ExperiencePage() {
  return <Experience />;
}