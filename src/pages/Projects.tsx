'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Live Docs',
		description: 'Real-time collaborative document editor built with Next.js, TypeScript, and Tailwind CSS, featuring live editing, comments, and notifications.',
		image: '/projects_img/project-1.png',
		github: 'https://github.com/niladri-1/LiveDocs',
		tags: ["Next.js", "TypeScript", "Liveblocks", "Lexical Editor", "ShadCN", "Tailwind CSS"]
	},
	{
		title: 'Chat App',
		description: "A real-time chat application built with JS, Node.js and Firebase. This platform allows users to send messages, join rooms, and communicate instantly in real-time.",
		image: '/projects_img/Chatapp.png',
		github: 'https://github.com/zshan-code/realtime-websocket-chat.git',
		tags: ["Next.js", "TypeScript", "Firebase", "Node.js", "Tailwind CSS"]
	},
	{
		title: 'Social Echo',
		description: 'The Social Echo App enables users to connect, share posts, interact through likes and comments, and build communities similar to a modern social networking platform.',
		image: '/projects_img/home.jpg',
		github: 'https://github.com/zshan-code/socialecho.git',
		tags: ["Tailwind CSS", "React.js", "Next.js", "Node.js", "MongoCompass"]
	},
	{
		title: 'InGPT',
		description: 'React-based chatbot clone of Google Gemini AI. It offers a chat interface, uses Gemini for responses, and is styled with CSS, featuring a responsive layout and smooth user experience.',
		image: '/projects_img/Chatbot.png',
		github: 'https://github.com/zshan-code/InGpt.git',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Google APIs']
	},
	{
		title: 'Fitness Mobile App',
		description: 'Fitness App is a React Native mobile application offering workout guidance and health tracking features, built with Expo for a responsive and performance-focused user experience.',
		image: '/projects_img/fitness.jpg',
		github: 'https://github.com/zshan-code/fitness-app.git',
		tags: ['ReactNative.js', 'Tailwind CSS', 'JavaScript', 'Expo']
	},
	{
		title: 'EcomStoreFullStack',
		description: 'A modern AI application built with React JS and Tailwind CSS, featuring smooth animations, unique design elements, and responsive layouts.Ideal for enhancing web development skills',
		image: '/projects_img/Shopit.png',
		github: 'https://github.com/zshan-code/Mern-Stack-Ecom-Project-Frontend.git',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js']
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>

			{/* View All Projects Button */}
			<ScrollAnimation>
				<div className="flex justify-center mt-12 mb-8">
					<motion.a
						href="https://github.com/zshan-code"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10 hover:border-white/20"
						whileHover={{ y: -2 }}
					>
						<Github className="w-5 h-5" />
						View All Projects on GitHub
					</motion.a>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Projects;