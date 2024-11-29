import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Rocket, Users, ArrowRight, Mail } from 'lucide-react';

const HomePage = () => {
  const featuredPosts = [
    {
      title: "Mastering Next.js",
      excerpt: "Deep dive into modern web development with Next.js 14",
      category: "Technology",
    },
    {
      title: "Design Principles",
      excerpt: "Creating intuitive and beautiful user interfaces",
      category: "Design",
    },
    {
      title: "AI Revolution",
      excerpt: "How artificial intelligence is transforming industries",
      category: "AI",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "In-Depth Content",
      description: "Expert-written articles covering emerging tech and trends.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Innovative Insights",
      description: "Stay ahead with cutting-edge ideas from industry pioneers.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Driven",
      description: "Connect with passionate professionals and thought leaders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Explore. Learn. Create.
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Dive into curated articles, insights, and ideas that spark creativity and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Latest Posts</Button>
            <Button size="lg">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Featured Posts */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to receive weekly insights, exclusive content, and industry trends directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;