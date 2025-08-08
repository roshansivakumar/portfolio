import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // This would normally come from an API or database
  const post = {
    id: 1,
    title: "Advanced Signal Processing in Wearable Devices",
    content: `# Advanced Signal Processing in Wearable Devices

## Introduction

In the realm of military-grade wearable technology, signal processing stands as one of the most critical components that determine the success or failure of a mission. After years of developing these systems, I've learned that the difference between a functional device and a life-saving tool often lies in the sophistication of its signal processing algorithms.

## The Challenge

Wearable devices in military environments face unique challenges:

- **Extreme Environmental Conditions**: Temperature variations, humidity, dust, and electromagnetic interference
- **Motion Artifacts**: Constant movement creates noise in biosignals
- **Power Constraints**: Limited battery life demands efficient processing
- **Real-time Requirements**: Critical decisions need instant data processing

## Signal Processing Techniques

### 1. Adaptive Filtering

\`\`\`python
def adaptive_filter(signal, reference, mu=0.01):
    """
    Implements LMS adaptive filtering for noise cancellation
    """
    n_samples = len(signal)
    output = np.zeros(n_samples)
    weights = np.zeros(filter_length)
    
    for i in range(filter_length, n_samples):
        x = reference[i-filter_length:i]
        y = np.dot(weights, x)
        error = signal[i] - y
        weights += mu * error * x
        output[i] = error
    
    return output
\`\`\`

### 2. Multi-Resolution Analysis

Using wavelet transforms to decompose signals into different frequency bands allows us to:
- Remove motion artifacts
- Preserve critical biomedical information
- Reduce computational overhead

### 3. Machine Learning Integration

Modern wearable devices leverage AI for:
- **Pattern Recognition**: Identifying abnormal physiological states
- **Predictive Analytics**: Anticipating health issues before they become critical
- **Adaptive Algorithms**: Learning user-specific patterns

## Implementation Considerations

### Hardware Constraints

When designing signal processing algorithms for wearable devices, several hardware limitations must be considered:

1. **Processing Power**: ARM Cortex-M series processors require optimized algorithms
2. **Memory Limitations**: Efficient data structures and in-place operations
3. **Power Consumption**: Algorithm complexity directly impacts battery life

### Real-World Testing

Laboratory conditions rarely match field deployment scenarios. Our testing protocol includes:

- **Environmental Chamber Testing**: -40°C to +85°C temperature range
- **Vibration Testing**: Military standard MIL-STD-810 compliance
- **EMI Testing**: Electromagnetic interference simulation
- **Field Trials**: Real-world military exercise participation

## Results and Impact

The implementation of advanced signal processing in our latest wearable device resulted in:

- **95% accuracy** in vital sign monitoring during high-stress situations
- **40% reduction** in false alarms compared to previous generation
- **60% improvement** in battery life through algorithmic optimization
- **Sub-100ms latency** for critical alert generation

## Future Directions

Looking ahead, several emerging technologies show promise:

### Edge AI Processing

Implementing neural networks directly on the device for:
- Real-time decision making
- Reduced communication overhead
- Enhanced privacy and security

### Sensor Fusion

Combining multiple sensor modalities:
- Accelerometry + Photoplethysmography
- Temperature + Galvanic Skin Response
- GPS + Inertial Measurement Units

## Conclusion

The evolution of signal processing in wearable military technology represents a convergence of traditional engineering principles with cutting-edge AI methodologies. As we push the boundaries of what's possible in harsh environments, the importance of robust, efficient, and intelligent signal processing becomes ever more critical.

The future of military wearables lies not just in better sensors or smaller form factors, but in the sophisticated algorithms that transform raw data into actionable intelligence. Every millisecond of processing time, every milliwatt of power consumption, and every percentage point of accuracy can mean the difference between mission success and failure.

---

*Want to discuss signal processing techniques or collaborate on wearable technology projects? Feel free to [reach out](/contact).*`,
    category: "technical",
    date: "2024-01-15",
    tags: ["Signal Processing", "Wearables", "Military Tech", "AI"],
    readTime: "8 min read",
    author: "Portfolio Owner"
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="outline" className="mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="p-8 card-gradient border-border mb-8">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-3">
              Technical Blogs
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </div>
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <Button variant="outline" size="sm">
            <Share2 size={16} className="mr-2" />
            Share Article
          </Button>
        </Card>

        {/* Article Content */}
        <Card className="p-8 card-gradient border-border">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {post.content.split('\n').map((line, index) => {
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

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Previous Post
          </Button>
          <Button variant="outline">
            Next Post
            <ArrowLeft size={16} className="ml-2 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;