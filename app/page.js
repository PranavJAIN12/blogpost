import React from 'react'
// import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Rocket, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const page = () => {
  const featuredPosts = [
    { 
      title: "Mastering Next.js", 
      excerpt: "Deep dive into modern web development with Next.js 14",
      category: "Technology"
    },
    { 
      title: "Design Principles", 
      excerpt: "Creating intuitive and beautiful user interfaces",
      category: "Design"
    },
    { 
      title: "AI Revolution", 
      excerpt: "How artificial intelligence is transforming industries",
      category: "AI"
    }
  ];
  return (
    <div className="min-h-screen bg-background text-foreground dark">
    {/* Hero Section */}
    <header 
      className="bg-gradient-to-r from-primary/80 to-primary/90 text-primary-foreground py-20 relative overflow-hidden animate-fade-in"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 
          className="text-5xl font-bold mb-6 transform transition-all duration-500 hover:scale-105"
        >
          Discover. Learn. Inspire.
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your gateway to insightful articles, cutting-edge tech, and transformative ideas.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" size="lg">
            Read Latest Posts
          </Button>
          <Button variant="outline" size="lg">
            Subscribe
          </Button>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/api/placeholder/1920/1080"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          className="filter brightness-50"
        />
      </div>
    </header>

    {/* Featured Posts Section */}
    <section 
      className="container mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in-top">Featured Posts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredPosts.map((post, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-105 animate-fade-in-delay"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="bg-card text-card-foreground hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-semibold">
                    {post.category}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>

    {/* Features Section */}
    <section 
      className="bg-secondary/10 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in-top">Why Our Blog?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <BookOpen className="h-12 w-12 text-primary" />, 
              title: "Comprehensive Content", 
              description: "In-depth articles covering the latest trends and insights." 
            },
            { 
              icon: <Rocket className="h-12 w-12 text-primary" />, 
              title: "Cutting-Edge Topics", 
              description: "Stay ahead with forward-thinking and innovative content." 
            },
            { 
              icon: <Users className="h-12 w-12 text-primary" />, 
              title: "Community Driven", 
              description: "Engage with a passionate community of learners and experts." 
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-delay"
              style={{ animationDelay: `${index * 0.2}s` }}
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
    <section 
      className="bg-gradient-to-r from-primary/80 to-primary/90 text-primary-foreground py-16 animate-fade-in"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Never Miss an Update</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest insights delivered straight to your inbox.
        </p>
        <div className="flex justify-center space-x-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-3 rounded-md w-full max-w-md bg-background/10 text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
          />
          <Button variant="secondary" size="lg">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default page
