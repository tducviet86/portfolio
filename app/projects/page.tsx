import { Header } from "@/components/header";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Capita Square Website",
      description:
        "A modern real estate showcase website for Capital Square apartments, featuring intuitive search, property highlights, and up-to-date information for prospective buyers and renters. Built with a responsive React.js front-end and Node.js backend, the site emphasizes performance, seamless navigation, and cross-device compatibility to deliver a polished user experience.",
      tags: [
        "React.js",
        "Responsive Design",
      ],
      links: {
        demo: "https://canhocapitalsquare.vn/",
      },
    }
,    
    {
      title: "Real Estate Pricing Website",
      description:
        "A real estate pricing portal with search and filtering to display up-to-date project prices. Built an interactive React.js front-end and Node.js + MongoDB back-end with real-time data updates. Optimized performance, responsiveness, and cross-browser compatibility through testing and debugging.",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Responsive Design",
        "Performance Optimization",
      ],
      links: {
        demo: "https://datvanggroup.com.vn/",
      },
    },
    {
      title: "E-Commerce Fashion App",
      description:
        "A full-stack fashion shopping application built with React Native and Node.js, delivering a seamless mobile commerce experience. Implemented advanced filtering, search & sorting, detailed product views (gallery, size & fit), wishlist functionality, persistent cart, promo code system, and a secure checkout flow. Optimized performance with lazy loading, pagination, image optimization, and structured API/state management.",
      tags: [
        "React Native",
        "React.js",
        "Node.js",
        "REST API",
        "Performance Optimization",
      ],
      links: {
        github: "https://github.com/tducviet86/fashion-app",
      },
    },
    {
      title: "Pet Portal – Capstone Project 1",
      description:
        "A team-based capstone project building a comprehensive pet service management platform. Developed core features including user authentication, role-based access, appointment scheduling, and dynamic data handling via RESTful APIs. Contributed to front-end UI development and backend integration, ensuring responsive design, scalable architecture, and clean modular code structure.",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Role-Based Access",
        "REST API",
        "Team Project",
      ],
      links: {
        github: "https://github.com/DuyHung03/pet-portal-cap1",
      },
    },
    {
      title: "Study Japan – Capstone Project 2",
      description:
        "A front-end focused capstone project built for exploring and learning about studying in Japan. Implemented an engaging user interface with dynamic content, seamless navigation, and responsive layouts. Emphasized user experience, accessibility, and performance while integrating structured components to present detailed study resources and cultural insights.",
      tags: [
        "React.js",
        "Responsive Design",
        "UI/UX Focus",
        "Component Architecture",
        "Front-End Development",
      ],
      links: {
        github: "https://github.com/Tien2003deptrai/FRONTEND-CAP2-STUDY_JAPAN",
      },
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="mb-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Featured Projects
          </h1>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-smooth bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-smooth text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-smooth text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Trần Đức Việt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
