"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, Award } from "lucide-react"

const experienceData = [
  {
    position: "Member",
    organization: "IEEE-RAS CUI Student Chapter",
    location: "Lahore, Pakistan",
    duration: "Sep 2023 - Present",
    description: "Active member of the IEEE Robotics and Automation Society student chapter at COMSATS University.",
    responsibilities: [
      "Managed many seminars and workshops",
      "Successfully conducted events like 'RAS FIESTA 2.0' and 'Hackathon'",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My professional journey and involvement in extracurricular activities that have shaped my skills and
            knowledge.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden animated-gradient hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {item.position} at {item.organization}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
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
                        <Award className="h-4 w-4 text-primary" /> Key Responsibilities
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {item.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
