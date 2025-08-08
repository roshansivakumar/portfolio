import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain, Target, Activity, Cpu, Download, Award, FileText, Users, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const [isMilitaryMode, setIsMilitaryMode] = useState(true);

  // Update theme attribute on document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isMilitaryMode ? 'military' : 'biomedical');
  }, [isMilitaryMode]);

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
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-card border border-primary/20 flex items-center justify-center tech-shadow overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Dr. Alex Rodriguez - The Hardware Maestro" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Dr. Alex Rodriguez</h2>
            <p className="text-center text-muted-foreground font-medium">The Hardware Maestro</p>
          </div>
          
          {/* Mode Toggle - Prominent and Interactive */}
          <div className="mode-toggle mx-auto mb-8 flex items-center justify-center w-fit">
            <div className="flex items-center gap-0">
              <button
                onClick={() => setIsMilitaryMode(false)}
                className={`mode-indicator flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  !isMilitaryMode ? 'active' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Activity className="w-4 h-4" />
                Biomedical Engineer
              </button>
              <div className="w-px h-8 bg-border"></div>
              <button
                onClick={() => setIsMilitaryMode(true)}
                className={`mode-indicator flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isMilitaryMode ? 'active' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Shield className="w-4 h-4" />
                Military Tech Engineer
              </button>
            </div>
          </div>

          {/* Visual cue that this is interactive */}
          <p className="text-xs text-muted-foreground mb-6 animate-pulse">
            ↑ Click to switch between my two specializations
          </p>

          <div className="mb-4">
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">
              The Hardware Maestro
            </Badge>
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
              <a href="/resume-alex-rodriguez.pdf" download className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20">
              <Link to="/contact">
                Let's Collaborate
              </Link>
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Github size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Mail size={20} />
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
                  title: "Senior Defense Engineer",
                  company: "Military Technologies Division",
                  description: "Leading development of next-generation wearable military systems with integrated AI threat detection and soldier monitoring capabilities.",
                  achievements: ["Reduced threat detection latency by 40%", "Led cross-functional team of 12 engineers", "5 military-grade patents filed"]
                },
                {
                  period: "2018 - 2020",
                  title: "Biomedical Systems Engineer",
                  company: "Defense Medical Technologies",
                  description: "Designed battlefield medical diagnostics and neural interface systems for combat medic applications and soldier health monitoring.",
                  achievements: ["99.8% diagnostic accuracy in field tests", "Deployed across 3 military branches", "Reduced medic response time by 35%"]
                },
                {
                  period: "2015 - 2018",
                  title: "Military Electronics Engineer",
                  company: "Tactical Systems Integration",
                  description: "Developed de-escalation technologies and counter-drone systems for military and homeland security applications.",
                  achievements: ["Successfully neutralized 200+ drone threats", "System adopted by 15+ military units", "2 DoD Innovation Awards"]
                },
                {
                  period: "2012 - 2015",
                  title: "Biomedical Research Engineer",
                  company: "Advanced Medical Devices Lab",
                  description: "Created AI-powered medical diagnostic tools and neural monitoring systems for both civilian and military medical applications.",
                  achievements: ["Published 12 peer-reviewed papers", "FDA approval for 3 medical devices", "International Medical Innovation Award"]
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

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People <span className="text-gradient">Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "His ability to simplify complex engineering problems is unmatched. A true maestro with hardware.",
                author: "Colonel Sarah Mitchell",
                title: "Defense Systems Program Director",
                category: "Military"
              },
              {
                quote: "The most innovative engineer I've worked with. Always finds solutions where others see obstacles.",
                author: "Dr. James Chen",
                title: "Chief Medical Officer",
                category: "Biomedical"
              },
              {
                quote: "He doesn't just build systems - he crafts experiences. Every detail is thoughtfully engineered.",
                author: "Maria Rodriguez",
                title: "Senior Systems Analyst",
                category: "Technical"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 card-gradient border-border">
                <div className="mb-4">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Publications Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications & <span className="text-gradient">Publications</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  "DoD 8570 IAT Level II",
                  "FDA QSR/ISO 13485 Certified",
                  "Professional Engineer (PE)",
                  "Project Management Professional (PMP)",
                  "Certified Biomedical Equipment Technician"
                ].map((cert, index) => (
                  <Card key={index} className="p-4 card-gradient border-border">
                    <p className="text-sm font-medium">{cert}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Patents */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Patents</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Wearable Threat Detection System",
                    number: "US Patent #11,234,567",
                    status: "Granted"
                  },
                  {
                    title: "Neural Interface Biomarker Analysis",
                    number: "US Patent #11,345,678", 
                    status: "Granted"
                  },
                  {
                    title: "Autonomous De-escalation Protocol",
                    number: "Patent Pending",
                    status: "Pending"
                  }
                ].map((patent, index) => (
                  <Card key={index} className="p-4 card-gradient border-border">
                    <p className="text-sm font-medium mb-1">{patent.title}</p>
                    <p className="text-xs text-muted-foreground mb-1">{patent.number}</p>
                    <Badge variant={patent.status === "Granted" ? "default" : "secondary"} className="text-xs">
                      {patent.status}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ExternalLink className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Publications</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "AI-Enhanced Battlefield Medical Diagnostics",
                    journal: "IEEE Trans. Biomedical Engineering",
                    year: "2023"
                  },
                  {
                    title: "Wearable Systems for Combat Environment Monitoring",
                    journal: "Journal of Military Medicine",
                    year: "2023"
                  },
                  {
                    title: "Neural Interface Design for Medical Applications",
                    journal: "Nature Biomedical Engineering",
                    year: "2022"
                  }
                ].map((pub, index) => (
                  <Card key={index} className="p-4 card-gradient border-border">
                    <p className="text-sm font-medium mb-1">{pub.title}</p>
                    <p className="text-xs text-muted-foreground mb-1">{pub.journal}</p>
                    <p className="text-xs text-primary">{pub.year}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 card-gradient border-border">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">alex.rodriguez@example.com</p>
            </Card>
            
            <Card className="p-6 card-gradient border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">(555) 123-4567</p>
            </Card>
            
            <Card className="p-6 card-gradient border-border">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">San Francisco, CA</p>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Ready to collaborate on the next breakthrough in military technology or biomedical innovation? 
            Let's build something extraordinary together.
          </p>
          
          <Button size="lg" className="tech-shadow">
            <Link to="/contact" className="flex items-center gap-2">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </Button>
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