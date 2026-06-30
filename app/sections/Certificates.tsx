"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, GraduationCap } from "lucide-react"

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2024",
    description: "...",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
    color: "from-purple-500 to-violet-500",
    link: "/certificates/nptel.pdf",
    
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "2024",
    description: "...",
    skills: ["Python", "OOP", "File Handling", "Functions"],
    color: "from-indigo-500 to-blue-500",
    link: "/certificates/infosys python.pdf",
    
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "2024",
    description: "...",
    skills: ["AI Fundamentals", "Search Algorithms", "Neural Networks"],
    color: "from-violet-500 to-purple-500",
    link: "/certificates/infosys ai.pdf",
    
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    date: "2024",
    description: "...",
    skills: ["Machine Learning", "Deep Learning", "NLP", "AI Ethics"],
    color: "from-blue-500 to-indigo-500",
    link: "/certificates/infosys foundation.pdf",
    
  },
]
export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Verified credentials and achievements
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <SectionReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`} />

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 shrink-0`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="glass" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="glass" size="sm" className="gap-2 text-xs" asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Certificate
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
