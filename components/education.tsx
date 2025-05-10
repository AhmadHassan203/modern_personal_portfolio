"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor's Degree in Software Engineering",
    institution: "COMSATS University",
    location: "Lahore, Pakistan",
    duration: "2022 - 2026",
    description: "Currently pursuing a degree in Software Engineering with focus on mobile app development , AI and mchine learning.",
    achievements: ["CGPA: 3.23"],
  },
  {
    degree: "Intermediate",
    institution: "Aspire College FerozpurRoad",
    location: "Lahore, Pakistan",
    duration: "2020 - 2022",
    description: "Completed intermediate education with excellent academic performance.",
    achievements: ["Grade: A+"],
  },
  {
    degree: "Matriculation",
    institution: "Bab-e-Arqam Model High School",
    location: "Lahore, Pakistan",
    duration: "2018 - 2020",
    description: "Completed matriculation with outstanding results.",
    achievements: ["Grade: A+"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills in various aspects
            of computer science and software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
                  <Card className="overflow-hidden animated-gradient hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-primary/5 border-b border-primary/10">
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {item.degree}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">{item.institution}</h4>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{item.description}</p>

                        <div className="pt-2">
                          <h5 className="text-sm font-semibold flex items-center gap-1 mb-2">
                            <Award className="h-4 w-4 text-primary" /> Achievements
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
