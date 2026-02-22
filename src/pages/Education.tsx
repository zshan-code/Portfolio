'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const Education = () => {
	const educationData = [
		{
			school: "COMSATS University Islamabad",
			location: "Islamabad, Pakistan",
			duration: "2024 - 2027",
			degree: "B.S. in Computer Science",
			grade: "CGPA: 3.43",
			image: "/education/college_img.jpg",
			resultUrl: "",
			coursework: [
				"Software Development",
				"Backend Systems",
				"Problem Solving",
				"Scalable Software",
				"Efficient Solutions",
				"Data Structures",
				"Algorithms",
			],
			description: "During my time as a Computer Science student at COMSATS University Islamabad, I have been building a strong foundation in core computing concepts, with a focus on software development, backend systems, and real-world problem solving. By actively working on hands-on projects, exploring new technologies, and continuously practicing coding, I have strengthened both my technical and analytical skills. I am an aggressive learner when it comes to gaining knowledge, always pushing myself to learn new tools and improve existing skills. This journey is shaping me into a capable developer, prepared to build scalable, efficient, and impactful software solutions."
		},
		{
			school: "Punjab College Daweoo Road FSD",
			location: "Faisalabad, Punjab, Pakistan",
			duration: "2020 - 2022",
			degree: "Higher Secondary Education",
			grade: "Percentage: 84%",
			image: "/education/clg_img.png",
			resultUrl: "",
			subjects: [
				"Physics",
				"Chemistry",
				"Mathematics",
				"Biology"
			],
			description: "My higher secondary education strengthened my academic discipline and broadened my perspective. Although I studied Pre-Medical, my curiosity for technology and development continued to grow alongside my studies. During this time, I independently explored computer science and programming, which deepened my interest in software development and AI. This phase shaped my career direction and helped me transition into computing with strong analytical and self-learning skills."
		},
		{
			school: "Sandal College FSD",
			location: "Faisalabad, Punjab, Pakistan",
			duration: "2017 - 2019",
			degree: "Secondary Education",
			grade: "Percentage: 94%",
			image: "/education/schl_img.jpg",
			resultUrl: "",
			subjects: [
				"Physics",
				"Chemistry",
				"Mathematics",
				"Computer Science",
				"Biology"
			],
			description: "My secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics and computer science has been instrumental in shaping my passion for software development, enabling me to approach complex technical challenges with confidence."
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="grid md:grid-cols-[300px,1fr] gap-6">
								{/* Left Column - Image */}
								<div className="relative h-64 md:h-full">
									<Image
										src={edu.image}
										alt={edu.school}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 300px"
										priority
										quality={90}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
											<div className="flex items-center gap-2 text-gray-300 mb-1">
												<MapPin className="w-4 h-4" />
												<span>{edu.location}</span>
											</div>
											<div className="flex items-center gap-2 text-gray-300">
												<Award className="w-4 h-4" />
												<span>{edu.grade}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<h4 className="text-lg font-semibold">{edu.degree}</h4>
									</div>

									<div className="flex items-start gap-2 text-gray-300 mb-6">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div>

									{edu.coursework && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.coursework.map((course) => (
													<span
														key={course}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{course}
													</span>
												))}
											</div>
										</div>
									)}

									{edu.subjects && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.subjects.map((subject) => (
													<span
														key={subject}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{subject}
													</span>
												))}
											</div>
										</div>
									)}

									<motion.a
										href={edu.resultUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
										whileHover={{ scale: 1.02 }}
									>
										View Result
										<ExternalLink className="w-4 h-4" />
									</motion.a>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;