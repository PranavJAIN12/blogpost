
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Layers, 
  Server, 
  // Wifi, 
  Sparkles,
  Heart,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {

  const features = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Cutting-Edge Technologies",
      description: "Explore the latest trends and innovations in software development."
      
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: "In-Depth Tutorials",
      description: "Comprehensive guides from beginner to advanced levels."
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "System Design",
      description: "Architectural insights and scalable solution strategies."
    }
  ];

  const articles = [
    {
      title: "Next Tutorial  ",
      category: "Web Development",
      image: "/nextjs.jpg",
      redirectTo: "/blogpost/next-tutorial"
    },
    {
      title: "C Programming Tutorial",
      category: "C",
      image: "/c.png",
      redirectTo:"/blogpost/c-programming-tutorial"

    },
    {
      title: "OOPs in C++",
      category: "OOPs",
      image: "/oops.png",
      redirectTo:"/blogpost/oops-cpp"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              <span className="text-primary font-medium">
                Tech Insights Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Empower Your Tech Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover comprehensive tutorials, expert insights, and cutting-edge technologies that transform your development skills.
            </p>
            <div className="flex space-x-4 flex-row">
              <Button size="lg">
                Get Started
                <Link href={"/blog"}>
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
             
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden ">
              <Image 
                src="/landing.svg" 
                alt="Tech Illustration"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive learning ecosystem for developers, designers, and tech enthusiasts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-secondary/10 p-6 hover:bg-secondary/20 transition-colors-shadow rounded-xl group shadow-gray-700 shadow-sm border-2 hover:shadow-md hover:shadow-white transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Preview */}
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the most recent and impactful tech content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-background  rounded-xl overflow-hidden hover:shadow-lg transition-shadow border-2 "
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4">{article.title}</h3>

                <Button variant="outline">
                  Read More
                  <Link href={article.redirectTo}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-secondary/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center mb-4 bg-primary/10 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              <span className="text-primary font-medium">
                Join Our Community
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Stay Ahead with Weekly Insights
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to receive curated tech news, exclusive tutorials, and industry trends directly in your inbox.
            </p>
            
            <div className="flex max-w-md mx-auto space-x-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;