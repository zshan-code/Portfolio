import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - zshan | CS Student at COMSATS",
  description:
    "Educational background of zshan. Pursuing B.S. in Computer Science from COMSATS University Islamabad. Academic journey from Sandal College and Punjab College FSD.",
  keywords:
    "Education, Computer Science, COMSATS University Islamabad, Sandal College FSD, Punjab College, Academic Background, zshan Education",
  openGraph: {
    title: "Education - zshan",
    description: "My educational background and academic journey",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education - zshan",
    description: "My educational background",
  },
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <Education />;
}
