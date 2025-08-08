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
  const [selectedTag, setSelectedTag] = useState("");

  const categories = [
    { id: "all", label: "All Posts", icon: <BookOpen size={18} /> },
    { id: "technical", label: "Technical Blogs", icon: <Brain size={18} /> },
    { id: "wisdom", label: "Dad's Wisdoms", icon: <Heart size={18} /> },
    { id: "recipes", label: "Mom's Recipes", icon: <ChefHat size={18} /> },
    { id: "mind", label: "Inside My Mind", icon: <Brain size={18} /> }
  ];

  const categoryTags = {
    technical: ["Signal Processing", "AI/ML", "Hardware", "System Design", "Electronics", "Firmware", "IoT", "Cybersecurity", "Algorithms", "Testing"],
    wisdom: ["Life Lessons", "Problem Solving", "Leadership", "Mentorship", "Career", "Engineering Mindset", "Innovation", "Teamwork", "Time Management", "Decision Making"],
    recipes: ["Comfort Food", "Family Recipe", "Batch Cooking", "Military Mess", "Quick Meals", "Hearty", "Traditional", "Crowd Pleasing", "Seasonal", "Nutritious"],
    mind: ["Philosophy", "Ethics", "Future Tech", "Society", "Psychology", "Reflection", "Innovation", "Creativity", "Critical Thinking", "Personal Growth"]
  };

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Signal Processing in Wearable Devices",
      excerpt: "Exploring the challenges and solutions in processing biosignals from military-grade wearable technology.",
      category: "technical",
      date: "2024-01-15",
      tags: ["Signal Processing", "Hardware", "Electronics"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Art of Problem-Solving: Lessons from Engineering",
      excerpt: "What 20 years of engineering has taught me about breaking down complex problems into manageable solutions.",
      category: "wisdom",
      date: "2024-01-10",
      tags: ["Problem Solving", "Engineering Mindset", "Life Lessons"],
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Mom's Famous Military Mess Hall Chili",
      excerpt: "A recipe that fed hundreds of soldiers and became a family tradition. Perfect for cold nights and feeding a crowd.",
      category: "recipes",
      date: "2024-01-08",
      tags: ["Comfort Food", "Family Recipe", "Military Mess"],
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "The Ethics of AI in Defense Applications",
      excerpt: "Navigating the moral complexities of artificial intelligence in military and defense scenarios.",
      category: "mind",
      date: "2024-01-05",
      tags: ["Ethics", "Future Tech", "Philosophy"],
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Building Resilient Systems: Hardware Meets Software",
      excerpt: "How to design systems that can withstand extreme conditions while maintaining functionality.",
      category: "technical",
      date: "2023-12-28",
      tags: ["System Design", "Hardware", "Testing"],
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Teaching Kids to Think Like Engineers",
      excerpt: "Simple everyday activities that help develop engineering mindset in children.",
      category: "wisdom",
      date: "2023-12-20",
      tags: ["Mentorship", "Engineering Mindset", "Leadership"],
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Mom's One-Pot Military Mac & Cheese",
      excerpt: "A hearty, cheesy comfort meal that can feed a platoon and still taste like home.",
      category: "recipes",
      date: "2023-12-15",
      tags: ["Comfort Food", "Quick Meals", "Crowd Pleasing"],
      readTime: "4 min read"
    },
    {
      id: 8,
      title: "The Future of Human-AI Collaboration",
      excerpt: "Exploring how artificial intelligence will reshape the way we work and think in the coming decades.",
      category: "mind",
      date: "2023-12-10",
      tags: ["Future Tech", "Innovation", "Critical Thinking"],
      readTime: "9 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  const getTagsForCategory = (category: string) => {
    if (category === "all") {
      return [...new Set(blogPosts.flatMap(post => post.tags))];
    }
    return categoryTags[category as keyof typeof categoryTags] || [];
  };

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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedTag("");
                }}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>

          {/* Tags Section */}
          <div className="mt-6">
            <div className="flex flex-wrap justify-center gap-2">
              {getTagsForCategory(selectedCategory).map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
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