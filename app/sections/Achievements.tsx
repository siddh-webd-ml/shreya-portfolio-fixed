"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Trophy, Star, Target, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "DRDO × ISRO Internship",
    description: "Selected for the prestigious collaborative research internship working on defense and space technology projects.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Star,
    title: "NPTEL Certified",
    description: "Successfully completed NPTEL Python for Data Science certification with excellent performance.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Target,
    title: "Infosys Springboard",
    description: "Completed multiple AI and Python certifications from Infosys Springboard platform.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Consistently solving complex algorithmic problems with strong analytical and logical thinking skills.",
    color: "from-violet-500 to-purple-500",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Milestones & <span className="text-gradient">Accomplishments</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Key highlights from my journey so far
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <SectionReveal key={achievement.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group text-center h-full"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{achievement.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
