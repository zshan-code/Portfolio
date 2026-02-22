import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio by zshan | MERN Stack Applications",
  description:
    "Explore web development projects by zshan. MERN stack applications, React.js projects, Next.js websites, Node.js backends, full-stack solutions, and open-source contributions. See real-world examples of modern web development.",
  keywords:
    "Web Development Projects, MERN Stack Projects, React.js Portfolio, Next.js Applications, Node.js Projects, Full Stack Applications, JavaScript Projects, Open Source Projects, zshan Projects",
  openGraph: {
    title: "Projects - Portfolio by zshan",
    description:
      "View my latest web development projects and full-stack applications",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Portfolio by zshan",
    description: "View my latest web development projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
