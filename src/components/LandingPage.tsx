"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  ArrowRight,
  Code,
  Briefcase,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { AnyAaaaRecord } from "dns";

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const projects = [
    {
      id: 1,
      title: "Ethereal Designs",
      image: "/placeholder.svg?height=600&width=800",
      description: "Crafting digital experiences that transcend the ordinary.",
    },
    {
      id: 2,
      title: "Quantum Innovations",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Pushing the boundaries of what is possible in the digital realm.",
    },
    {
      id: 3,
      title: "Nebula Networks",
      image: "/placeholder.svg?height=600&width=800",
      description: "Connecting ideas and people across the digital universe.",
    },
    {
      id: 4,
      title: "Lumina Labs",
      image: "/placeholder.svg?height=600&width=800",
      description: "Illuminating the path to groundbreaking technologies.",
    },
  ];

  const skills = [
    {
      category: "Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Python",
        "Docker",
      ],
    },
    {
      category: "Design",
      items: [
        "UI/UX Design",
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "Prototyping",
        "Design Systems",
        "Motion Design",
      ],
    },
  ];

  const experiences = [
    {
      title: "Lead Innovation Architect",
      company: "FutureTech Solutions",
      period: "2020 - Present",
    },
    {
      title: "Senior Experience Designer",
      company: "CreativeMind Studios",
      period: "2017 - 2020",
    },
    {
      title: "Frontend Visionary",
      company: "WebCraft Atelier",
      period: "2015 - 2017",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground cursor-none font-['Cormorant_Garamond']">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-primary italic">
                Elegance
              </a>
            </div>
            <nav className="hidden sm:block">
              <ul className="flex space-x-8">
                {[
                  "Home",
                  "Projects",
                  "Skills",
                  "Experience",
                  "About",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden fixed inset-x-0 top-16 bg-background/80 backdrop-blur-md shadow-sm z-30"
        >
          <nav className="py-4">
            <ul className="flex flex-col items-center space-y-4">
              {[
                "Home",
                "Projects",
                "Skills",
                "Experience",
                "About",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                backgroundSize: ["100% 100%", "200% 200%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  'url("/hero.jpg?height=1080&width=1920")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight tracking-tighter">
                Crafting <span className="text-primary italic">Digital</span>
                <br />
                Elegance
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl ml-auto">
                Where innovation meets sophistication in the realm of web design
                and development.
              </p>
              <Button
                size="lg"
                className="rounded-full px-8 text-lg font-light tracking-wider"
              >
                Explore Our Creations
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        {/* Projects Section - updated card sizes */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-light mb-16 text-left italic">
              Our Masterpieces
            </h2>
            <div className="relative max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            <div className="mt-16 text-right">
              <Link href="/portfolio" passHref>
                <Button
                  size="lg"
                  className="rounded-full px-8 text-lg font-light tracking-wider"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center italic">
              Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card text-card-foreground p-8 rounded-lg shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
                    {skillSet.category === "Development" ? (
                      <Code className="mr-2 h-6 w-6 text-primary" />
                    ) : (
                      <Briefcase className="mr-2 h-6 w-6 text-primary" />
                    )}
                    {skillSet.category}
                  </h3>
                  <ul className="grid grid-cols-2 gap-4 relative z-10">
                    {skillSet.items.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm tracking-wide">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-muted pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-right italic">
              Journey
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card text-card-foreground p-8 rounded-lg shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center justify-between relative z-10`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-primary mb-2 italic">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground text-sm tracking-widest">
                      {exp.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/30 via-primary to-primary pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <motion.img
                  src="/placeholder.svg?height=600&width=600"
                  alt="About Me"
                  className="rounded-full w-64 h-64 object-cover mx-auto md:mx-0 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <motion.div
                className="w-full md:w-1/2 text-right"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 italic">
                  The Artisan
                </h2>
                <p className="text-lg mb-6 leading-relaxed">
                  With a decade of experience in the digital realm, I've honed
                  my craft to create experiences that not only function
                  flawlessly but also inspire and captivate. My journey has led
                  me from startups to Fortune 500 companies, each project adding
                  a unique brushstroke to my canvas of expertise.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  I believe in the harmonious blend of aesthetics and
                  functionality, where every pixel and line of code serves a
                  purpose. When not immersed in the digital world, you'll find
                  me seeking inspiration in nature's design, from the fractal
                  patterns of leaves to the golden ratios in seashells.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-8 text-lg font-light tracking-wider"
                >
                  Discover More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center italic">
              Let's Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card text-card-foreground p-8 rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">
                  Get in Touch
                </h3>
                <form className="space-y-4 relative z-10">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-background/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background/50"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-background/50"
                    rows={4}
                  />
                  <Button type="submit" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card text-card-foreground p-8 rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">
                  Contact Information
                </h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span>contact@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span>123 Elegance Street, Design City, 12345</span>
                  </li>
                </ul>
                <h4 className="text-xl font-semibold mt-8 mb-4 relative z-10">
                  Follow Us
                </h4>
                <div className="flex space-x-4 relative z-10">
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Define the type for ProjectCard props
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
  index: number;
}

// Update the ProjectCard function signature
function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center mb-24 last:mb-0`}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 text-right"
        }`}
      >
        <h3 className="text-3xl font-bold mb-4 italic">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 text-sm tracking-wider"
        >
          Explore Project
        </Button>
      </div>
    </motion.div>
  );
}
