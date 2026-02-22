'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
    {
        title: "JavaScript Basics",
        issuer: "HackerRank",
        image: "/files/certificates_pdf/Js Basics.png",
        certificateUrl: "/files/certificates_pdf/Js Basics.pdf",
    },
    {
        title: "Python Basics",
        issuer: "HackerRank",
        image: "/files/certificates_pdf/Python Basics.png",
        certificateUrl: "/files/certificates_pdf/Python Basics.pdf",
    },
    {
        title: "TypeScript",
        issuer: "Greester",
        image: "/files/certificates_pdf/Greester Typescrypit Certificate.png",
        certificateUrl: "/files/certificates_pdf/typescipt.pdf",
    },
];

const Certificates = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
            <ScrollAnimation>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8" />
                    Certificates & Achievements
                </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {certificates.map((cert, index) => (
                    <ScrollAnimation key={cert.title}>
                        <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 flex flex-col">
                            {/* Certificate image */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                                </div>
                                <motion.a
                                    href={cert.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium w-fit"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    View Certificate
                                    <ExternalLink className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
