import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About zshan - Full Stack Developer | CS Student",
  description:
    "Learn about zshan, a passionate Full Stack Developer and Computer Science student from Faisalabad, Pakistan. Specialized in Backend development, application logic, and building scalable systems.",
  keywords:
    "About zshan, Full Stack Developer, CS Student COMSATS, Backend Developer Faisalabad, Pakistan Software Engineer, Web Development, Application Logic",
  openGraph: {
    title: "About zshan - Full Stack Developer",
    description:
      "Learn about my journey as a Full Stack Developer and Computer Science student",
    url: "https://github.com/zshan-code",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About zshan - Full Stack Developer",
    description: "Learn about my journey as a Full Stack Developer",
  },
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
  return <About />;
}