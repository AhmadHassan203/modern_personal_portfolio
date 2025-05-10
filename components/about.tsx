"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, User, Briefcase, Heart } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "4+", icon: Briefcase },
    { label: "Events Managed", value: "2+", icon: Heart },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden animated-border">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl overflow-hidden">
                <Image src="/profile.jpg" alt="Ahmad Hassan" fill className="object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>

              {/* Floating badge - only on the first image */}
              {/* <motion.div
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 text-sm font-medium text-primary"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Front-End Developer
              </motion.div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              {/* <h3 className="text-2xl font-bold"></h3> */}
            </div>

            <p className="text-muted-foreground">
              As a Software Engineering student with comprehensive knowledge in various technologies and tools, I bring
              a strong foundation in frontend web-development and Java programming. Through coursework and practical
              projects, I have honed my technical skills and problem-solving abilities.
            </p>
            <p className="text-muted-foreground">
              With a passion for innovation and a track record of active participation in extracurricular activities, I
              am driven to contribute to tech industry and make a meaningful impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 my-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center py-4 animated-gradient">
                    <CardContent className="p-0">
                      <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">Ahmad Hassan</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-muted-foreground">iahmadbhatti21@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">Lahore, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone:</h4>
                <p className="text-muted-foreground">+92 3268520903</p>
              </div>
            </div>

            <div className="mt-4">
              <Button asChild className="group transition-transform duration-200 hover:scale-105">
                <a href="/Resume.pdf" download="Ahmad_Hassan_Resume.pdf">
                  <FileText className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
