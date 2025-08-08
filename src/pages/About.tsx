import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain, Target } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Wearable Military Tech",
      description: "Developing advanced wearable systems for military applications, focusing on durability, performance, and soldier safety.",
      tags: ["Electronics", "Materials", "Testing"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "De-escalation Tools",
      description: "Creating innovative solutions for threat de-escalation against both human and drone targets.",
      tags: ["Defense", "Innovation", "Security"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Diagnostics",
      description: "Implementing artificial intelligence for advanced diagnostic systems and predictive analysis.",
      tags: ["AI/ML", "Healthcare", "Diagnostics"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Biomedical Engineering",
      description: "Bridging the gap between engineering and medicine with cutting-edge biomedical solutions.",
      tags: ["Biomedical", "Research", "Innovation"]
    }
  ];

  const recentProjects = [
    {
      title: "Neural Interface Prototype",
      description: "Advanced brain-computer interface for medical diagnostics",
      tags: ["AI", "Biomedical"]
    },
    {
      title: "Tactical Wearable System",
      description: "Military-grade wearable with advanced sensor integration",
      tags: ["Military", "IoT"]
    }
  ];

  const recentBlogs = [
    {
      title: "The Future of AI in Military Applications",
      category: "Technical Blogs",
      date: "2024-01-15"
    },
    {
      title: "Dad's Wisdom: Problem-Solving Like an Engineer",
      category: "Dad's Wisdoms",
      date: "2024-01-10"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-card border border-primary/20 flex items-center justify-center tech-shadow">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Engineer & <span className="text-gradient">Innovator</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Electrical & Biomedical Engineer specializing in wearable military technology, 
            de-escalation systems, and AI-powered diagnostics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-shadow">
              <Link to="/projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20">
              <Link to="/contact">
                Let's Collaborate
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 card-gradient border-border hover:border-primary/20 smooth-transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Recent Projects */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Recent <span className="text-gradient">Projects</span>
              </h3>
              <div className="space-y-6">
                {recentProjects.map((project, index) => (
                  <Card key={index} className="p-6 card-gradient border-border">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
                <Link to="/projects">
                  <Button variant="outline" className="w-full border-primary/20">
                    View All Projects <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Recent Blogs */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Recent <span className="text-gradient">Posts</span>
              </h3>
              <div className="space-y-6">
                {recentBlogs.map((blog, index) => (
                  <Card key={index} className="p-6 card-gradient border-border">
                    <h4 className="font-semibold mb-2">{blog.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{blog.category}</p>
                    <p className="text-xs text-muted-foreground">{blog.date}</p>
                  </Card>
                ))}
                <Link to="/blog">
                  <Button variant="outline" className="w-full border-primary/20">
                    View All Posts <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;