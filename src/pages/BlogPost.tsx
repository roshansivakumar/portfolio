import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
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

## Results and Impact

The implementation of advanced signal processing in our latest wearable device resulted in:

- **95% accuracy** in vital sign monitoring during high-stress situations
- **40% reduction** in false alarms compared to previous generation
- **60% improvement** in battery life through algorithmic optimization
- **Sub-100ms latency** for critical alert generation

## Conclusion

The evolution of signal processing in wearable military technology represents a convergence of traditional engineering principles with cutting-edge AI methodologies.`,
      category: "technical",
      date: "2024-01-15",
      tags: ["Signal Processing", "Hardware", "Electronics"],
      readTime: "8 min read",
      author: "The Hardware Maestro"
    },
    {
      id: 2,
      title: "The Art of Problem-Solving: Lessons from Engineering",
      content: `# The Art of Problem-Solving: Lessons from Engineering

## Introduction

What 20 years of engineering has taught me about breaking down complex problems into manageable solutions.

## Core Principles

- **Break it down**: Every complex problem is just a collection of smaller, solvable problems
- **Question assumptions**: The biggest breakthroughs come from challenging what we think we know
- **Iterate rapidly**: Perfect is the enemy of good enough to test

## Real-World Applications

These principles have served me well in both military tech development and biomedical engineering projects.`,
      category: "wisdom",
      date: "2024-01-10",
      tags: ["Problem Solving", "Engineering Mindset", "Life Lessons"],
      readTime: "5 min read",
      author: "The Hardware Maestro"
    },
    {
      id: 3,
      title: "Mom's Famous Military Mess Hall Chili",
      content: `# Mom's Famous Military Mess Hall Chili

## The Story

A recipe that fed hundreds of soldiers and became a family tradition. Perfect for cold nights and feeding a crowd.

## Ingredients

- 3 lbs ground beef
- 2 large onions, diced
- 6 cloves garlic, minced
- 2 cans kidney beans
- 2 cans diced tomatoes
- 3 tbsp chili powder
- 2 tbsp cumin
- Salt and pepper to taste

## Instructions

1. Brown the ground beef in a large pot
2. Add onions and garlic, cook until softened
3. Add remaining ingredients and simmer for 2 hours
4. Serve with cornbread and watch it disappear!

This recipe has been tested by the toughest critics - hungry soldiers!`,
      category: "recipes",
      date: "2024-01-08",
      tags: ["Comfort Food", "Family Recipe", "Military Mess"],
      readTime: "3 min read",
      author: "The Hardware Maestro"
    },
    {
      id: 4,
      title: "The Ethics of AI in Defense Applications",
      content: `# The Ethics of AI in Defense Applications

## Introduction

Navigating the moral complexities of artificial intelligence in military and defense scenarios.

## Key Considerations

- **Accountability**: Who is responsible when AI makes decisions?
- **Transparency**: How do we ensure AI decisions can be understood?
- **Human oversight**: Maintaining human control in critical situations

## Framework for Ethical AI

Developing guidelines that balance innovation with responsibility.`,
      category: "mind",
      date: "2024-01-05",
      tags: ["Ethics", "Future Tech", "Philosophy"],
      readTime: "12 min read",
      author: "The Hardware Maestro"
    },
    {
      id: 5,
      title: "Building Resilient Systems: Hardware Meets Software",
      content: `# Building Resilient Systems: Hardware Meets Software

## Introduction

How to design systems that can withstand extreme conditions while maintaining functionality.

## Design Principles

- **Redundancy**: Multiple backup systems
- **Graceful degradation**: Systems that fail safely
- **Self-healing**: Automatic recovery mechanisms

## Testing Methodologies

Real-world stress testing in harsh environments.`,
      category: "technical",
      date: "2023-12-28",
      tags: ["System Design", "Hardware", "Testing"],
      readTime: "10 min read",
      author: "The Hardware Maestro"
    }
  ];

  // Find the specific post by ID
  const post = blogPosts.find(p => p.id === parseInt(id || '1')) || blogPosts[0];

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