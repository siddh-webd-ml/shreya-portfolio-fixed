"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Handwritten Digit Recognition",
    description: "A deep learning application that recognizes handwritten digits using Convolutional Neural Networks (CNN). Built with Python and TensorFlow, it achieves 98% accuracy on the MNIST dataset and includes a real-time drawing interface for testing.",
    image: "/project1.jpg",
    tags: ["Python", "TensorFlow", "CNN", "MNIST", "Deep Learning"],
    github: "https://github.com/yourusername/handwritten-digit-recognition",
    demo: "https://your-demo-link.com",
    featured: true,
  },
  {
    title: "Smart Email Spam Classifier",
    description: "An intelligent email classification system using Natural Language Processing and Machine Learning algorithms. Implements Naive Bayes and SVM classifiers with TF-IDF vectorization to accurately detect spam emails with 95% precision.",
    image: "/project2.jpg",
    tags: ["Python", "NLP", "Scikit-learn", "Naive Bayes", "SVM"],
    github: "https://github.com/yourusername/email-spam-classifier",
    demo: "https://your-demo-link.com",
    featured: false,
  },
  {
    title: "Student Performance Predictor",
    description: "A machine learning model that predicts student academic performance based on various factors like study habits, attendance, and previous grades. Uses regression algorithms and includes data visualization dashboards for insights.",
    image: "/project3.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Regression", "Data Analysis"],
    github: "https://github.com/yourusername/student-performance-predictor",
    demo: "https://your-demo-link.com",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real-world applications built with passion and precision
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl glass hover:bg-white/10 transition-all duration-500 overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-white/20" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="purple" className="text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="glass" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="glass" size="sm" className="gap-2 flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="gradient" size="sm" className="gap-2 flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
