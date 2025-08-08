import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Zap, Shield, Brain, Target, Cpu, Radio } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Neural Interface Diagnostic System",
      description: "Advanced brain-computer interface system for real-time neural signal analysis and medical diagnostics. Features machine learning algorithms for pattern recognition and predictive analysis.",
      image: "/api/placeholder/400/250",
      category: "AI & Biomedical",
      status: "Active Development",
      tags: ["AI/ML", "Neural Networks", "Biomedical", "Real-time Processing"],
      icon: <Brain className="w-6 h-6" />,
      links: {
        demo: "#",
        github: "#",
        docs: "#"
      }
    },
    {
      id: 2,
      title: "Tactical Wearable Communication System",
      description: "Military-grade wearable device with advanced sensor integration, secure communication protocols, and environmental monitoring capabilities for extreme conditions.",
      image: "/api/placeholder/400/250",
      category: "Military Tech",
      status: "Deployment Ready",
      tags: ["IoT", "Military", "Sensors", "Communication"],
      icon: <Shield className="w-6 h-6" />,
      links: {
        demo: "#",
        docs: "#"
      }
    },
    {
      id: 3,
      title: "Autonomous Threat Detection Platform",
      description: "AI-powered system for detecting and categorizing potential threats including drones and human targets. Integrates with existing security infrastructure.",
      image: "/api/placeholder/400/250",
      category: "Defense Systems",
      status: "Beta Testing",
      tags: ["Computer Vision", "AI", "Security", "Automation"],
      icon: <Target className="w-6 h-6" />,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Biomedical Signal Processing Suite",
      description: "Comprehensive software suite for processing and analyzing various biomedical signals including ECG, EEG, and EMG data with advanced filtering algorithms.",
      image: "/api/placeholder/400/250",
      category: "Healthcare Tech",
      status: "Production",
      tags: ["Signal Processing", "Healthcare", "Data Analysis", "Medical"],
      icon: <Zap className="w-6 h-6" />,
      links: {
        demo: "#",
        github: "#",
        docs: "#"
      }
    },
    {
      id: 5,
      title: "Adaptive De-escalation Protocol",
      description: "Smart system that analyzes threat levels and recommends appropriate de-escalation strategies for both human and drone encounters.",
      image: "/api/placeholder/400/250",
      category: "Security Solutions",
      status: "Research Phase",
      tags: ["Machine Learning", "Security", "Protocol Design", "Analytics"],
      icon: <Cpu className="w-6 h-6" />,
      links: {
        docs: "#"
      }
    },
    {
      id: 6,
      title: "RF Interference Mitigation System",
      description: "Advanced system for detecting and mitigating radio frequency interference in sensitive military and medical equipment.",
      image: "/api/placeholder/400/250",
      category: "RF Engineering",
      status: "Testing",
      tags: ["RF Engineering", "Signal Processing", "Hardware", "Testing"],
      icon: <Radio className="w-6 h-6" />,
      links: {
        demo: "#",
        docs: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-primary text-primary-foreground";
      case "Deployment Ready": return "bg-secondary text-secondary-foreground";
      case "Beta Testing": return "bg-accent text-accent-foreground";
      case "Active Development": return "bg-muted text-muted-foreground";
      case "Research Phase": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Projects & <span className="text-gradient">Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of engineering projects spanning military technology, biomedical systems, 
            AI diagnostics, and defense solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-gradient border-border hover:border-primary/20 smooth-transition">
              {/* Project Image */}
              <div className="aspect-video bg-muted/30 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-background/10 backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button className="w-full">
                      View Details
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" size="sm">
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 card-gradient border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="text-gradient">Collaborating</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, innovative ideas, 
              or opportunities to contribute to meaningful engineering challenges.
            </p>
            <Link to="/contact">
              <Button size="lg" className="tech-shadow">
                Let's Connect
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;