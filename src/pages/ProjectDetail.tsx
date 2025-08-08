import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Brain, Calendar, Users, Target } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // This would normally come from an API or database
  const project = {
    id: 1,
    title: "Neural Interface Diagnostic System",
    description: "Advanced brain-computer interface system for real-time neural signal analysis and medical diagnostics.",
    longDescription: `This project represents a breakthrough in brain-computer interface technology, combining advanced signal processing with machine learning for real-time neural signal analysis and medical diagnostics.

## Project Overview

The Neural Interface Diagnostic System is designed to revolutionize how we monitor and analyze brain activity in medical settings. By leveraging cutting-edge AI algorithms and high-precision sensors, the system provides unprecedented insights into neural patterns and potential health indicators.

## Technical Implementation

### Hardware Components

- **High-density EEG sensors**: 256-channel system with 24-bit resolution
- **Custom signal processing unit**: ARM Cortex-A78 based computing module
- **Wireless transmission**: Low-latency 5GHz communication protocol
- **Power management**: Advanced battery system with 12+ hour operation

### Software Architecture

\`\`\`python
class NeuralProcessor:
    def __init__(self):
        self.sampling_rate = 1000  # Hz
        self.channels = 256
        self.ai_model = self.load_trained_model()
    
    def process_signals(self, raw_data):
        # Real-time signal processing pipeline
        filtered_data = self.apply_filters(raw_data)
        features = self.extract_features(filtered_data)
        predictions = self.ai_model.predict(features)
        return self.format_output(predictions)
\`\`\`

## Key Features

### Real-time Analysis
- **Sub-100ms latency** for critical event detection
- **Continuous monitoring** with 24/7 operation capability
- **Adaptive filtering** to reduce artifacts and noise

### Machine Learning Integration
- **Custom neural networks** trained on 10,000+ hours of EEG data
- **Pattern recognition** for epileptic seizure prediction
- **Anomaly detection** for early warning systems

### Clinical Applications
- **Epilepsy monitoring**: 95% accuracy in seizure prediction
- **Sleep study analysis**: Automated sleep stage classification
- **Cognitive assessment**: Real-time attention and focus metrics

## Research Collaboration

This project is developed in partnership with:
- **Johns Hopkins Medical Center**: Clinical validation studies
- **MIT AI Lab**: Machine learning algorithm development
- **Department of Defense**: Military application research

## Results and Impact

### Performance Metrics
- **95% accuracy** in seizure prediction (30-second advance warning)
- **99.2% uptime** in continuous monitoring scenarios
- **40% reduction** in false positives compared to existing systems

### Clinical Trials
Currently undergoing Phase II clinical trials with:
- 150 patients across 5 medical centers
- 6-month monitoring periods
- FDA breakthrough device designation received

## Technical Specifications

| Component | Specification |
|-----------|--------------|
| Sampling Rate | 1000 Hz per channel |
| Resolution | 24-bit ADC |
| Frequency Range | 0.1 - 500 Hz |
| Power Consumption | 2.5W average |
| Wireless Range | 100m line-of-sight |
| Battery Life | 12+ hours continuous |

## Future Developments

### Phase 2 Enhancements
- **Implantable sensors** for long-term monitoring
- **Cloud integration** for remote patient monitoring
- **Mobile app** for patient and caregiver alerts

### Research Directions
- **Multi-modal sensing**: Integration with fMRI and PET data
- **Predictive modeling**: 24-hour advance seizure prediction
- **Personalized medicine**: Patient-specific AI models

## Publications and Patents

### Recent Publications
1. "Real-time Neural Signal Processing for Seizure Prediction" - *Nature Biomedical Engineering* (2024)
2. "Machine Learning Approaches to EEG Analysis" - *IEEE Transactions on Biomedical Engineering* (2023)

### Patent Applications
- US Patent Application 17/123,456: "Method for Real-time Neural Signal Classification"
- US Patent Application 17/234,567: "Adaptive Filtering System for Biomedical Signals"

## Open Source Components

Several components of this project are being released as open source:
- **Signal processing library**: Python package for EEG analysis
- **Visualization tools**: Real-time EEG display software
- **Dataset**: Anonymized training data for research use

---

*This project represents the intersection of advanced engineering, medical science, and artificial intelligence. For collaboration opportunities or technical discussions, please [contact me](/contact).*`,
    category: "AI & Biomedical",
    status: "Active Development",
    tags: ["AI/ML", "Neural Networks", "Biomedical", "Real-time Processing"],
    startDate: "2023-06-01",
    team: ["Lead Engineer", "2 AI Researchers", "Medical Advisor"],
    technologies: ["Python", "TensorFlow", "C++", "ARM Cortex", "DSP"],
    links: {
      demo: "#",
      github: "#",
      docs: "#",
      paper: "#"
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <Card className="p-8 card-gradient border-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Brain className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Started</p>
                <p className="font-medium">{project.startDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-medium">{project.team.length} Members</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="mt-1">{project.status}</Badge>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Button>
                <ExternalLink size={16} className="mr-2" />
                View Demo
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline">
                <Github size={16} className="mr-2" />
                Source Code
              </Button>
            )}
            {project.links.docs && (
              <Button variant="outline">
                Documentation
              </Button>
            )}
            {project.links.paper && (
              <Button variant="outline">
                Research Paper
              </Button>
            )}
          </div>
        </Card>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-gradient border-border">
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {project.longDescription.split('\n').map((line, index) => {
                    // Handle headers
                    if (line.startsWith('# ')) {
                      return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gradient">{line.substring(2)}</h1>;
                    }
                    if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
                    }
                    
                    // Handle code blocks
                    if (line.startsWith('```')) {
                      return <div key={index} className="bg-muted p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">{line}</div>;
                    }
                    
                    // Handle tables
                    if (line.includes('|')) {
                      return <div key={index} className="bg-muted/30 p-2 rounded text-sm my-2">{line}</div>;
                    }
                    
                    // Handle lists
                    if (line.startsWith('- ')) {
                      return <li key={index} className="ml-4 mb-1">{line.substring(2)}</li>;
                    }
                    
                    // Handle bold text
                    if (line.includes('**')) {
                      const parts = line.split('**');
                      return (
                        <p key={index} className="mb-4">
                          {parts.map((part, i) => 
                            i % 2 === 0 ? part : <strong key={i} className="font-semibold">{part}</strong>
                          )}
                        </p>
                      );
                    }
                    
                    // Regular paragraphs
                    if (line.trim()) {
                      return <p key={index} className="mb-4">{line}</p>;
                    }
                    
                    return <br key={index} />;
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team */}
            <Card className="p-6 card-gradient border-border">
              <h3 className="font-semibold mb-4">Team</h3>
              <ul className="space-y-2">
                {project.team.map((member, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {member}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Technologies */}
            <Card className="p-6 card-gradient border-border">
              <h3 className="font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-6 card-gradient border-border">
              <h3 className="font-semibold mb-4">Interested in This Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch to discuss collaboration opportunities or technical details.
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  Contact Me
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;