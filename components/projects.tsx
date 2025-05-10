"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Eye, Smartphone, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Updated projects based on CV and new additions
const projects = [
  // {
  //   title: "CineFind",
  //   description:
  //     "A React Native mobile app that helps users discover movies and TV shows based on their preferences, with features like search, recommendations, and watchlists.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["React Native", "JavaScript", "API Integration", "Mobile App", "UI/UX Design"],
  //   category: "Mobile App",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  
  {
    title: "RideTunez",
    description:
      "A Ride Booking App Developed using Java and JavaFX for frontEnd .This application helps user to book rides",
    image: "/ridetunez.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Audio API", "Semester Project"],
    category: "Web App",
    githubUrl: "https://github.com/AhmadHassan203/Ride-Tunz",
  },
  {
    title: "Pak Pro",
    description:
      "A parking Management System Developed using HTML,CSS and JavaScript for FrontEnd and NodeJs with PostgresSQL for BackEnd.",
    image: "/pakpro.jpg",
    tags: ["HTML", "CSS", "JavaScript", "NodeJS", "PostgreSQL", "Responsive Design"],
    category: "Web App",
    liveUrl: "https://pak-pro.vercel.app/",
    githubUrl: "https://github.com/AhmadHassan203/Pak-Pro",
  },
  {
    title: "Old Portfolio",
    description:
      "My first portfolio website built with HTML, CSS, and JavaScript showcasing my early web development skills.",
    image: "/old-portfolio.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Website",
    liveUrl: "https://old-portfolio-sandy.vercel.app/",
    githubUrl: "https://github.com/AhmadHassan203/old-portfolio-",
  },
  {
    title: "DNG Food Stuff",
    description:
      "A custom React website for food listing with search and filtering capabilities for a local food business.",
    image: "/dng-foodstuff.jpg",
    tags: ["React", "CSS", "JavaScript", "Food Listing", "Search Functionality"],
    category: "Web App",
    liveUrl: "https://www.dngfoodstuff.com/",
    githubUrl: "https://github.com/AhmadHassan203/foodstuffweb",
  },
  {
    title: "Message Encryptor",
    description:
      "A semester project that allows users to encrypt and decrypt messages using encryption algorithms.",
    image: "/message-encryptor.jpg",
    tags: ["C", "Encryption", "Security", "Semester Project"],
    category: "Security",
    githubUrl: "https://github.com/AhmadHassan203/simple_message_encryptor",
  },
  // {
  //   title: "Website ClonePage",
  //   description:
  //     "A web project that recreates popular website designs with pixel-perfect accuracy to demonstrate frontend skills.",
  //   image: "/website-clone.jpg",
  //   tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Project"],
  //   category: "Website",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  
]

const categories = [
  { name: "All", filter: () => true },
  { name: "Web App", filter: (project: any) => project.category === "Web App" },
  { name: "Mobile App", filter: (project: any) => project.category === "Mobile App" },
  { name: "Website", filter: (project: any) => project.category === "Website" },
  { name: "Tool", filter: (project: any) => project.category === "Tool" },
  { name: "Security", filter: (project: any) => project.category === "Security" },
]

// Function to get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Mobile App":
      return <Smartphone className="h-4 w-4 mr-1" />
    case "Web App":
      return <Code className="h-4 w-4 mr-1" />
    case "Website":
      return <ExternalLink className="h-4 w-4 mr-1" />
    case "Tool":
      return <Code className="h-4 w-4 mr-1" />
    case "Security":
      return <Code className="h-4 w-4 mr-1" />
    default:
      return <Code className="h-4 w-4 mr-1" />
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6 // 2 rows of 3 projects (or 2 rows of 2 projects on medium screens)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Filter projects when category changes
  useEffect(() => {
    const category = categories.find((c) => c.name === activeCategory)
    if (category) {
      const filtered = projects.filter(category.filter)
      setFilteredProjects(filtered)
      setCurrentPage(1) // Reset to first page when category changes
    }
  }, [activeCategory])

  // Handle page changes
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      // Scroll to top of projects section
      document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      // Scroll to top of projects section
      document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my academic and personal projects. Each one was carefully crafted to solve specific
            problems and showcase different skills and technologies.
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

        {/* Projects grid with pagination */}
        <div id="projects-grid">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-200 animated-gradient">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain md:object-cover transition-transform duration-300 group-hover:scale-110"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setSelectedProject(project)}
                          className="transition-transform duration-200 hover:scale-105"
                        >
                          <Eye className="mr-2 h-4 w-4" /> Preview
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                          <CardDescription className="mt-2">{project.description}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-primary border-primary/20 flex items-center"
                        >
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="transition-transform duration-200 hover:scale-105"
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveUrl ? (
                        <Button size="sm" asChild className="transition-transform duration-200 hover:scale-105">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      ) : null}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full bg-background/50 hover:bg-background/70 transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <Badge
                    variant="outline"
                    className="mb-4 bg-primary/5 text-primary border-primary/20 flex items-center"
                  >
                    {getCategoryIcon(selectedProject.category)}
                    {selectedProject.category}
                  </Badge>
                  <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.liveUrl ? (
                      <Button asChild className="transition-transform duration-200 hover:scale-105">
                        <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Live
                        </Link>
                      </Button>
                    ) : null}
                    <Button variant="outline" asChild className="transition-transform duration-200 hover:scale-105">
                      <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" /> View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
