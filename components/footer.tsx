// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { Github, Linkedin, Twitter, Heart } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="py-10 bg-muted/30 border-t">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center md:items-start"
//           >
//             <Link href="/" className="text-2xl font-bold text-primary">
//               Portfolio
//             </Link>
//             <p className="text-muted-foreground mt-2 text-center md:text-left">
//               Building exceptional digital experiences.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex gap-4"
//           >
//             <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
//               <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">GitHub</span>
//               </Link>
//             </Button>
//             <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
//               <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//             </Button>
//             <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
//               <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//             </Button>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-8 pt-8 border-t text-center"
//         >
//           <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
//             © {currentYear} Your Name. All rights reserved. Made with{" "}
//             <Heart className="h-4 w-4 text-primary fill-primary" /> and Next.js
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }
