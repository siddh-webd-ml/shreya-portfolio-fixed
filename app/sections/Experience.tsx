"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Research Intern",
    company: "DRDO × ISRO Collaborative Internship",
    location: "India",
    duration: "June 2026 – July 2026",
    description: [
      "Contributing to cutting-edge research in defense and space technology applications",
      "Collaborating with senior scientists on AI-driven solutions for national security challenges",
      "Developing and optimizing machine learning models for satellite data analysis",
      "Participating in interdisciplinary projects combining AI, data science, and aerospace engineering",
    ],
    tags: ["AI/ML", "Research", "Satellite Data", "Python"],
    current: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My professional journey and internships
            </p>
          </div>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/50 to-transparent" />

          {experiences.map((exp, index) => (
            <SectionReveal key={exp.title} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative pl-12 lg:pl-0 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "lg:pr-[50%] lg:pr-12" : "lg:pl-[50%] lg:pl-12"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 border-4 border-slate-950 shadow-lg shadow-purple-500/30 z-10" />

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-purple-300 font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <Badge variant="purple" className="shrink-0">
                        Current
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="indigo" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
