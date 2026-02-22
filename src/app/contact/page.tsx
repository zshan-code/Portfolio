import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact zshan - Hire Full Stack Developer | Get in Touch",
  description:
    "Get in touch with zshan for web development projects, freelance work, collaboration opportunities, or job inquiries. Email: zshan.code@gmail.com | Phone: +923186659743. Based in Faisalabad, Pakistan. Available for remote work worldwide.",
  keywords:
    "Contact zshan, Hire Full Stack Developer, Freelance Web Developer, Contact Web Developer, Hire MERN Stack Developer, Web Development Services, Remote Developer Hire",
  openGraph: {
    title: "Contact zshan - Full Stack Developer",
    description: "Get in touch for web development projects and collaboration",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact zshan",
    description: "Get in touch for web development projects",
  },
  alternates: {
    canonical: "/contact",
  },
};


export default function ContactPage() {
  return <Contact />;
}