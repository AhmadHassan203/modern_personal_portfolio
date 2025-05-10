"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiC,
  SiNextdotjs,
} from "react-icons/si"
import { DiJava } from "react-icons/di"
import { FaPython, FaDatabase, FaMobileAlt, FaReact } from "react-icons/fa"
import { BsRobot } from "react-icons/bs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Updated skills with all skills from CV and requested additions
const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", level: "Intermediate" },
  // { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Intermediate" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Intermediate" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Intermediate" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Intermediate" },
  { name: "Git", icon: SiGit, color: "#F05032", level: "Intermediate" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: "Intermediate" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", level: "Intermediate" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Intermediate" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: "Intermediate" },
  { name: "Java", icon: DiJava, color: "#007396", level: "Intermediate" },
  { name: "Python", icon: FaPython, color: "#3776AB", level: "Intermediate" },
  { name: "C", icon: SiC, color: "#A8B9CC", level: "Intermediate" },
  { name: "MS SQL Server", icon: FaDatabase, color: "#CC2927", level: "Intermediate" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "Intermediate" },
  { name: "React Native", icon: FaReact, color: "#61DAFB", level: "Intermediate" },
  { name: "Mobile App Dev", icon: FaMobileAlt, color: "#3DDC84", level: "Intermediate" },
  { name: "AI", icon: BsRobot, color: "#00FFFF", level: "Intermediate" },
]

// Updated categories to include Mobile and AI
const categories = [
  { name: "All", filter: () => true },
  {
    name: "Frontend",
    filter: (skill: any) =>
      ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Bootstrap"].includes(skill.name),
  },
  { name: "Backend", filter: (skill: any) => ["Node.js", "PostgreSQL", "MS SQL Server"].includes(skill.name) },
  { name: "Mobile", filter: (skill: any) => ["React Native", "Mobile App Dev"].includes(skill.name) },
  {
    name: "Languages",
    filter: (skill: any) => ["JavaScript", "TypeScript", "Java", "Python", "C"].includes(skill.name),
  },
  { name: "Tools", filter: (skill: any) => ["Git", "AI"].includes(skill.name) },
]

// Component for the floating skill icon
const FloatingSkillIcon = ({ skill, index }: { skill: any; index: number }) => {
  // Generate random but deterministic floating animation parameters
  const randomFloat = (min: number, max: number, seed: number) => {
    // Simple deterministic random function based on index
    const random = Math.sin(seed * 9999) * 10000
    return min + (random - Math.floor(random)) * (max - min)
  }

  // Create unique animation parameters for each icon
  const floatY = randomFloat(-10, 10, index)
  const floatDuration = randomFloat(3, 6, index + 1)
  const floatDelay = randomFloat(0, 2, index + 2)
  const rotateAmount = randomFloat(-5, 5, index + 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      layout
      className="relative"
    >
      <Card className="overflow-hidden h-full animated-gradient hover:shadow-lg transition-all duration-200">
        <CardContent className="p-6 flex flex-col items-center gap-3">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center bg-background shadow-inner relative"
            style={{ boxShadow: `0 0 15px ${skill.color}30` }}
            animate={{
              y: [0, floatY, 0],
              rotate: [0, rotateAmount, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: floatDuration,
              ease: "easeInOut",
              delay: floatDelay,
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
          >
            <skill.icon className="w-8 h-8" style={{ color: skill.color }} />

            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [`0 0 5px ${skill.color}30`, `0 0 15px ${skill.color}50`, `0 0 5px ${skill.color}30`],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: floatDelay,
              }}
            />
          </motion.div>

          <h3 className="font-medium text-center">{skill.name}</h3>
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            {skill.level}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Floating background icons for visual effect
const FloatingBackgroundIcons = ({ filteredSkills }: { filteredSkills: typeof skills }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {filteredSkills.slice(0, 5).map((skill, index) => (
        <motion.div
          key={`float-${skill.name}`}
          className="absolute opacity-10"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: Math.random() * 20 + 20,
            ease: "linear",
          }}
        >
          <skill.icon className="w-12 h-12" style={{ color: skill.color }} />
        </motion.div>
      ))}
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredSkills, setFilteredSkills] = useState(skills)
  const [isHovering, setIsHovering] = useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const skillsPerPage = 12 // 2 rows of 6 skills on desktop, or 3 rows of 4 on medium screens

  // Calculate total pages
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage)

  // Get current skills
  const indexOfLastSkill = currentPage * skillsPerPage
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage
  const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill)

  // Filter skills when category changes
  useEffect(() => {
    const category = categories.find((c) => c.name === activeCategory)
    if (category) {
      const filtered = skills.filter(category.filter)
      setFilteredSkills(filtered)
      setCurrentPage(1) // Reset to first page when category changes
    }
  }, [activeCategory])

  // Handle page changes
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      // Scroll to top of skills section
      document.getElementById("skills-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      // Scroll to top of skills section
      document.getElementById("skills-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating background icons */}
      <FloatingBackgroundIcons filteredSkills={filteredSkills} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my education and projects. Here are some of
            the key skills I've developed.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills grid with pagination */}
        <div id="skills-grid">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-page-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            >
              {currentSkills.map((skill, index) => (
                <FloatingSkillIcon key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2 px-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full ${currentPage === i + 1 ? "bg-primary" : "hover:bg-primary/10"}`}
                  aria-label={`Page ${i + 1}`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
