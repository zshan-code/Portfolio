import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certificates & Achievements - zshan | Certifications",
  description:
    "Professional certificates and achievements of zshan. Certifications in JavaScript, TypeScript, Python, and more. Verified skills and continuous learning in web development and software engineering.",
  keywords:
    "Certificates, Certifications, Achievements, Professional Certifications, JavaScript Certificate, TypeScript Certificate, Python Certificate, Web Development Certifications",
  openGraph: {
    title: "Certificates & Achievements - zshan",
    description: "My professional certificates and achievements",
    url: "https://github.com/zshan-code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates & Achievements",
    description: "My professional certifications",
  },
  alternates: {
    canonical: "/certificates",
  },
};


export default function CertificatesPage() {
  return <Certificates />;
}