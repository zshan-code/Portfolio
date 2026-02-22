import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "zshan - Full Stack Developer | CS Student",
    template: "%s | zshan",
  },
  description:
    "zshan - Full Stack Developer and Computer Science student from Faisalabad, Pakistan. Specialized in Backend development, applications, and clean coding. Pursuing B.S in Computer Science at COMSATS University Islamabad.",

  // Extended keywords for better SEO
  keywords: [
    // Name variations
    "zshan",
    "zshan-code",

    // Job titles
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Web Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Node.js Developer",

    // Technologies - Frontend
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Progressive Web Apps",
    "PWA",

    // Technologies - Backend
    "Node.js",
    "Express.js",
    "REST API",
    "GraphQL",
    "Server-Side Rendering",
    "SSR",

    // Technologies - Database
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "Database Design",
    "Database Development",

    // Technologies - DevOps/Tools
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Cloud Computing",
    "CI/CD",
    "Vercel",

    // Skills
    "Web Development",
    "Web Applications",
    "Full Stack Development",
    "Modern Web Technologies",
    "Scalable Applications",
    "Performance Optimization",
    "SEO Optimization",

    // Location
    "Faisalabad Developer",
    "Punjab Developer",
    "Pakistan Developer",
    "Remote Developer",

    // Services
    "Portfolio",
    "Hire Developer",
    "Freelance Developer",
    "Web Development Services",
  ].join(", "),

  authors: [
    {
      name: "zshan",
      url: "https://github.com/zshan-code",
    },
  ],
  creator: "zshan",
  publisher: "zshan",

  // Manifest
  manifest: "/manifest.json",

  // App-specific metadata
  applicationName: "zshan Portfolio",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/zshan-code",
    title: "zshan - Full Stack Developer",
    description:
      "Full Stack Developer and Computer Science student specializing in Backend and app development.",
    siteName: "zshan Portfolio",
    images: [
      {
        url: "/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "zshan - Full Stack Developer",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "zshan - Full Stack Developer | CS Student",
    description:
      "Full Stack Developer specializing in Backend and app development.",
    creator: "@zshan_code",
    images: ["https://github.com/zshan-code/profile/profile.jpg"],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL for relative URLs
  metadataBase: new URL("https://github.com/zshan-code"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Verification
  verification: {
    google: "googlea4a36904e14398c1",
    // Add other verifications if needed
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  category: "technology",

  // Structured data will be added via JSON-LD in the component
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "zshan",
    alternateName: "zshan-code",
    url: "https://github.com/zshan-code",
    image: "/profile/profile.jpg",
    sameAs: [
      "https://github.com/zshan-code",
      "https://www.linkedin.com/in/zshancode",
      "https://www.facebook.com/zshan.code"
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    email: "zshan.code@gmail.com",
    telephone: "+923186659743",
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "React.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "SQL",
      "Web Development",
      "Database Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "COMSATS University Islamabad",
    },
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Favicons */}
        <link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/nextjs.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="zshan Portfolio" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
