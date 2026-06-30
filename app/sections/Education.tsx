"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "B.Tech Computer Science",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Acropolis Institute of Technology and Research",
    location: "Indore, Madhya Pradesh, India",
    duration: "2022 – 2026",
    description: [
      "Pursuing comprehensive coursework in AI, ML, Data Structures, and Software Engineering",
      "Active participant in coding competitions and technical workshops",
      "Consistently achieving academic excellence with a strong focus on practical applications",
    ],
    achievements: ["Academic Excellence", "Coding Competitions"],
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Academic <span className="text-gradient">Background</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My educational journey and qualifications
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <SectionReveal key={edu.degree} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-t-2xl" />

                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-400 shrink-0 w-fit">
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-purple-300 font-medium">
                        {edu.specialization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.achievements.map((achievement) => (
                        <Badge key={achievement} variant="purple" className="gap-1">
                          <Award className="w-3 h-3" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
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
