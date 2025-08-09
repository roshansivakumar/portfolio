import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    collaboration: ""
  });

  const collaborationTypes = [
    "Research & Development",
    "Military Technology",
    "Biomedical Innovation",
    "AI & Machine Learning",
    "Consulting",
    "Speaking Engagement",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCollaborationSelect = (type: string) => {
    setFormData({
      ...formData,
      collaboration: type
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      collaboration: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Collaborate</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to work on innovative engineering solutions? I'm always interested in 
            discussing new projects and collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-6 card-gradient border-border">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@portfolio.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 card-gradient border-border">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Collaboration Type</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {collaborationTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={formData.collaboration === type ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 smooth-transition"
                        onClick={() => handleCollaborationSelect(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full tech-shadow"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Card className="p-6 card-gradient border-border">
            <h3 className="text-xl font-semibold mb-4">
              Areas of <span className="text-gradient">Interest</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Research & Development</h4>
                <p className="text-sm text-muted-foreground">
                  Novel approaches to wearable technology, biomedical devices, and AI applications in defense and healthcare.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Consulting Services</h4>
                <p className="text-sm text-muted-foreground">
                  Technical consulting for military technology, signal processing, and system integration projects.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Speaking Engagements</h4>
                <p className="text-sm text-muted-foreground">
                  Presentations on engineering innovation, military technology trends, and AI in critical applications.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Open Source Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Contributing to meaningful open-source projects in signal processing, AI, and engineering tools.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;