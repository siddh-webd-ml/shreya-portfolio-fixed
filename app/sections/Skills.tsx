"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/app/components/SectionReveal"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Artificial Intelligence", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Problem Solving", level: 90 },
      { name: "Data Structures", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <Badge variant="glass" className="text-xs">{level}%</Badge>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Technologies and skills I have mastered
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <SectionReveal key={category.title} delay={catIndex * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.15 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
