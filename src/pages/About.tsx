import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain, Target, Activity, Cpu } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isMilitaryMode, setIsMilitaryMode] = useState(true);

  const militaryExperiences = [
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
      icon: <Cpu className="w-6 h-6" />,
      title: "Tactical AI Systems",
      description: "Implementing AI-powered threat detection and analysis systems for military operations.",
      tags: ["AI/ML", "Defense", "Real-time"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Combat Electronics",
      description: "Designing ruggedized electronic systems for harsh battlefield environments.",
      tags: ["Electronics", "Durability", "Field-tested"]
    }
  ];

  const biomedicalExperiences = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Medical Diagnostics",
      description: "Developing advanced diagnostic tools for early disease detection and patient monitoring.",
      tags: ["Diagnostics", "Healthcare", "Innovation"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Interfaces",
      description: "Creating brain-computer interfaces for medical rehabilitation and assistive technologies.",
      tags: ["BCI", "Neuroscience", "Rehabilitation"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Biomedical Devices",
      description: "Engineering life-saving medical devices with focus on patient safety and efficacy.",
      tags: ["Medical Devices", "FDA", "Safety"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Medicine",
      description: "Developing personalized treatment systems using AI and biomarker analysis.",
      tags: ["AI/ML", "Personalized", "Biomarkers"]
    }
  ];

  const experiences = isMilitaryMode ? militaryExperiences : biomedicalExperiences;

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
          
          {/* Mode Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-medium ${!isMilitaryMode ? 'text-primary' : 'text-muted-foreground'}`}>
              Biomedical
            </span>
            <Toggle
              pressed={isMilitaryMode}
              onPressedChange={setIsMilitaryMode}
              className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {isMilitaryMode ? <Shield className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
            </Toggle>
            <span className={`text-sm font-medium ${isMilitaryMode ? 'text-primary' : 'text-muted-foreground'}`}>
              Military Tech
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {isMilitaryMode ? 'Military Tech' : 'Biomedical'} Engineer & <span className="text-gradient">Innovator</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {isMilitaryMode 
              ? "Electrical Engineer specializing in wearable military technology, de-escalation systems, and tactical AI solutions."
              : "Biomedical Engineer focused on medical diagnostics, neural interfaces, and life-saving medical device innovation."
            }
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

      {/* Professional Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>
            
            <div className="space-y-12">
              {[
                {
                  period: "2020 - Present",
                  title: "Senior Biomedical Engineer",
                  company: "Defense Systems Integration",
                  description: "Leading development of next-generation wearable military technology with integrated AI diagnostics and threat detection capabilities.",
                  achievements: ["Reduced detection latency by 40%", "Led team of 12 engineers", "3 patents pending"]
                },
                {
                  period: "2017 - 2020",
                  title: "Electrical Systems Engineer",
                  company: "Military Technologies Corp",
                  description: "Designed and implemented de-escalation systems for both human and autonomous drone threats in field operations.",
                  achievements: ["99.2% system reliability", "Deployed in 15+ missions", "Cost reduction of 25%"]
                },
                {
                  period: "2014 - 2017",
                  title: "Biomedical Research Engineer",
                  company: "Advanced Diagnostics Lab",
                  description: "Developed AI-powered diagnostic tools for rapid field assessment and medical triage applications.",
                  achievements: ["Published 8 research papers", "FDA approval for 2 devices", "International recognition"]
                }
              ].map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-card border border-primary/20 flex items-center justify-center tech-shadow">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="p-6 card-gradient border-border">
                      <div className="mb-4">
                        <div className="text-sm text-primary font-medium mb-2">{exp.period}</div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <div className="text-muted-foreground font-medium">{exp.company}</div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
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