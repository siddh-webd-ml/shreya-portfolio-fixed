"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionReveal from "@/app/components/SectionReveal"
import { Code, Brain, Lightbulb, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Focus",
    description: "Deeply passionate about artificial intelligence and machine learning, constantly exploring new algorithms and techniques.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, efficient code with a focus on best practices and software engineering principles.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Strong analytical thinking with a knack for breaking down complex problems into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks, always eager to expand my knowledge horizon.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-300 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let Me <span className="text-gradient">Introduce</span> Myself
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A dedicated Computer Science student with a passion for AI and ML
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <SectionReveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
                <Image
                  src="/about.jpg"
                  alt="Shreya Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-2xl" />
            </div>
          </SectionReveal>

          {/* Content */}
          <div className="space-y-8">
            <SectionReveal delay={0.3}>
              <div className="space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  I am <span className="text-purple-300 font-semibold">Shreya Gupta</span>, a passionate
                  Computer Science student specializing in Artificial Intelligence and Machine Learning at
                  Acropolis Institute of Technology and Research.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My journey in tech began with a fascination for how machines can learn and adapt. Today, I
                  channel that curiosity into building intelligent systems that solve real-world problems. From
                  developing predictive models to creating software solutions, I thrive at the intersection of
                  creativity and technology.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Currently, I am gaining invaluable experience as a Research Intern at the prestigious
                  DRDO × ISRO Collaborative Internship, where I contribute to cutting-edge research in
                  defense and space technology applications.
                </p>
              </div>
            </SectionReveal>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <SectionReveal key={item.title} delay={0.4 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
