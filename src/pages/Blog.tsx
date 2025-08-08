import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Search, BookOpen, Heart, ChefHat, Brain } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Posts", icon: <BookOpen size={18} /> },
    { id: "technical", label: "Technical Blogs", icon: <Brain size={18} /> },
    { id: "wisdom", label: "Dad's Wisdoms", icon: <Heart size={18} /> },
    { id: "recipes", label: "Mom's Recipes", icon: <ChefHat size={18} /> },
    { id: "mind", label: "Inside My Mind", icon: <Brain size={18} /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Signal Processing in Wearable Devices",
      excerpt: "Exploring the challenges and solutions in processing biosignals from military-grade wearable technology.",
      category: "technical",
      date: "2024-01-15",
      tags: ["Signal Processing", "Wearables", "Military Tech"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Art of Problem-Solving: Lessons from Engineering",
      excerpt: "What 20 years of engineering has taught me about breaking down complex problems into manageable solutions.",
      category: "wisdom",
      date: "2024-01-10",
      tags: ["Problem Solving", "Engineering", "Life Lessons"],
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Mom's Famous Military Mess Hall Chili",
      excerpt: "A recipe that fed hundreds of soldiers and became a family tradition. Perfect for cold nights and feeding a crowd.",
      category: "recipes",
      date: "2024-01-08",
      tags: ["Comfort Food", "Family Recipe", "Batch Cooking"],
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "The Ethics of AI in Defense Applications",
      excerpt: "Navigating the moral complexities of artificial intelligence in military and defense scenarios.",
      category: "mind",
      date: "2024-01-05",
      tags: ["AI Ethics", "Defense", "Philosophy"],
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Building Resilient Systems: Hardware Meets Software",
      excerpt: "How to design systems that can withstand extreme conditions while maintaining functionality.",
      category: "technical",
      date: "2023-12-28",
      tags: ["System Design", "Resilience", "Hardware"],
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Teaching Kids to Think Like Engineers",
      excerpt: "Simple everyday activities that help develop engineering mindset in children.",
      category: "wisdom",
      date: "2023-12-20",
      tags: ["Education", "Children", "STEM"],
      readTime: "6 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "technical": return <Brain size={16} className="text-primary" />;
      case "wisdom": return <Heart size={16} className="text-accent" />;
      case "recipes": return <ChefHat size={16} className="text-secondary" />;
      case "mind": return <Brain size={16} className="text-purple-400" />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical insights, life wisdom, family recipes, and random thoughts from an engineer's perspective.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="p-6 card-gradient border-border hover:border-primary/20 smooth-transition h-full cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(post.category)}
                  <span className="text-sm text-muted-foreground capitalize">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;