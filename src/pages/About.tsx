'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { CONTACT_INFO } from '../config/contact';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "CS Student",
			description: "COMSATS University Islamabad"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "Backend Focused",
			description: "Passionate about logic & systems"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "3.43 CGPA",
			description: "Academic Excellence"
		}
	];

	const interests = [
		"Backend Development",
		"App Development",
		"Database Management",
		"API Design",
		"Scalable Architectures",
		"Clean Code"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="relative aspect-square overflow-hidden rounded-2xl">
						<Image
							src="/profile/profile.jpeg"
							alt="zshan"
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
							sizes="(max-width: 768px) 100vw, 400px"
							priority
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi! I'm a passionate full-stack developer and Computer Science student who loves building real-world applications. My journey into tech started during university, where I discovered that I enjoy not just designing interfaces — but mainly building the logic behind them.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Currently, I’m pursuing my B.S. in Computer Science from COMSATS University Islamabad, one of the well-known institutes in Pakistan. Throughout my academic journey, I’ve maintained a CGPA of 3.43 while continuously working on practical projects to strengthen my development skills.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I’m especially interested in backend development and application development, where I can design systems, manage databases, handle APIs, and build scalable architectures. I enjoy understanding how systems work internally and solving real-world problems through clean and efficient code.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Based in Faisalabad, Punjab, Pakistan", "B.S. Computer Science – COMSATS University Islamabad", "CGPA: 3.43", "Strong interest in Backend & App Development"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							<Link
								href={CONTACT_INFO.cv}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</Link>
							<Link
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</Link>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;