"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Home, ChevronDown } from "lucide-react"
import Link from "next/link"
import ParticlesBackground from "./hero-canvas"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useScrollPosition } from "@/hooks/use-scroll-position"

// Roles for typewriter effect - updated based on CV
const roles = ["Front-End Developer", "Web Developer", "Full-Stack Developer","Mobile App Developer"]

function TypewriterEffect() {
  const [currentRole, setCurrentRole] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = roles[currentRole]

      if (isDeleting) {
        setText(current.substring(0, text.length - 1))
        setSpeed(50) // Faster when deleting
      } else {
        setText(current.substring(0, text.length + 1))
        setSpeed(100) // Normal speed when typing
      }

      // If completed typing the current role
      if (!isDeleting && text === current) {
        // Pause at the end
        setSpeed(2000)
        setIsDeleting(true)
      }
      // If finished deleting
      else if (isDeleting && text === "") {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setSpeed(300) // Pause before typing next word
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, currentRole, speed])

  return (
    <div className="flex items-center h-full">
      <span className="mr-2">I am a</span>
      <span className="text-primary font-semibold relative">
        {text}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1.2em] bg-primary ml-1 align-middle"
        />
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: text.length ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </span>
    </div>
  )
}

export default function Hero() {
  const aboutRef = useRef(null)
  const sectionRef = useRef(null)
  const scrollPosition = useScrollPosition()

  // Calculate parallax values based on scroll position
  const calculateParallax = (speed: number) => {
    return scrollPosition * speed
  }

  // Fixed scrollToAbout function to ensure it works properly
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden" ref={sectionRef}>
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Slow-moving background shapes */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/5"
          style={{
            y: calculateParallax(0.2),
            x: calculateParallax(0.1),
          }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-primary/5"
          style={{
            y: calculateParallax(-0.15),
            x: calculateParallax(-0.05),
          }}
        />

        {/* Medium-speed elements */}
        <motion.div
          className="absolute top-[30%] right-[15%] w-40 h-40 rounded-full bg-primary/10"
          style={{
            y: calculateParallax(-0.3),
            x: calculateParallax(-0.2),
          }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[20%] w-48 h-48 rounded-full bg-primary/10"
          style={{
            y: calculateParallax(0.25),
            x: calculateParallax(0.15),
          }}
        />

        {/* Fast-moving foreground elements */}
        <motion.div
          className="absolute top-[45%] left-[40%] w-16 h-16 rounded-full bg-primary/15"
          style={{
            y: calculateParallax(0.4),
            x: calculateParallax(0.3),
          }}
        />
        <motion.div
          className="absolute top-[15%] right-[30%] w-20 h-20 rounded-full bg-primary/15"
          style={{
            y: calculateParallax(-0.45),
            x: calculateParallax(-0.35),
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[35%] w-24 h-24 rounded-full bg-primary/15"
          style={{
            y: calculateParallax(0.5),
            x: calculateParallax(0.2),
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-[60%] right-[25%] w-32 h-32 rotate-45 bg-primary/10"
          style={{
            y: calculateParallax(-0.35),
            rotate: `${45 + scrollPosition * 0.02}deg`,
          }}
        />
        <motion.div
          className="absolute top-[25%] left-[15%] w-24 h-24 rotate-12 bg-primary/10"
          style={{
            y: calculateParallax(0.3),
            rotate: `${12 - scrollPosition * 0.03}deg`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Mobile Profile Picture - Only visible on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center items-center lg:hidden mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(var(--primary-rgb), 0.3)",
                    "0 0 30px 8px rgba(var(--primary-rgb), 0.5)",
                    "0 0 20px 5px rgba(var(--primary-rgb), 0.3)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30"
              >
                <Image src="/hero-profile.jpg" alt="Ahmad Hassan" fill className="object-cover" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 10,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
            style={{ y: calculateParallax(-0.1) }} // Subtle upward movement on scroll
          >
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mt-2">
                <span className="text-foreground">Ahmad</span> <span className="text-primary">Hassan</span>
              </h1>
              <div className="text-xl md:text-3xl font-medium mt-4 text-muted-foreground h-[40px] md:h-[45px] overflow-hidden">
                <TypewriterEffect />
              </div>
            </div>

            <p className="text-muted-foreground max-w-md">
              A Software Engineering student with a passion for frontend development. I build responsive and
              user-friendly web applications with modern technologies.
            </p>

            <div className="flex gap-4 mt-2">
              <Button
                asChild
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="group hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="group-hover:text-primary transition-colors">View Projects</span>
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                asChild
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="https://github.com/AhmadHassan203" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                asChild
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://www.linkedin.com/in/ahmad-hassan-669036269/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Desktop Profile Picture - Only visible on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
            style={{ y: calculateParallax(0.15) }} // Subtle downward movement on scroll
          >
            {/* Circular profile image with animation - now visible on small screens too */}
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(var(--primary-rgb), 0.3)",
                    "0 0 30px 8px rgba(var(--primary-rgb), 0.5)",
                    "0 0 20px 5px rgba(var(--primary-rgb), 0.3)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30"
              >
                <Image src="/hero-profile.jpg" alt="Ahmad Hassan" fill className="object-cover" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 10,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Decorative circles with parallax effect */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                style={{ y: calculateParallax(-0.25), x: calculateParallax(0.2) }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut", delay: 1 }}
                style={{ y: calculateParallax(0.3), x: calculateParallax(-0.15) }}
              />

              {/* Additional parallax decorative elements - only visible on larger screens */}
              <motion.div
                className="absolute top-1/2 -right-8 md:-right-12 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 hidden sm:block"
                style={{ y: calculateParallax(-0.4), x: calculateParallax(0.25) }}
              />
              <motion.div
                className="absolute -top-8 md:-top-12 left-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/25 hidden sm:block"
                style={{ y: calculateParallax(-0.35), x: calculateParallax(-0.3) }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Down Button - Fixed Implementation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Button
          variant="ghost"
          onClick={() => {
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="flex flex-col items-center hover:bg-primary/10 hover:text-primary transition-colors"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <motion.div
            className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </motion.div>

      {/* Home Button in Bottom Right - Fixed Implementation */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90 h-12 w-12"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <Home className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </Button>
      </motion.div>
    </section>
  )
}
