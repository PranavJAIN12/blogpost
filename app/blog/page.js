import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';




const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A deep dive into the world of React Hooks and how they revolutionize state management.",
    slug: "understanding-react-hooks",
    date: "2024-01-15",
    author: "Sarah Johnson",
    image: "/placeholder-image.jpg"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description: "Exploring emerging technologies and trends shaping the web development landscape.",
    slug: "future-of-web-development",
    date: "2024-02-20",
    author: "Michael Chen",
    image: "/placeholder-image.jpg"
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    description: "Comprehensive guide to creating complex layouts with CSS Grid and Flexbox.",
    slug: "mastering-css-grid",
    date: "2024-03-10",
    author: "Emma Rodriguez",
    image: "/placeholder-image.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 ">
        Latest Blog Posts
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-gray-300 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
         
            <div className="relative w-full h-48">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
           
            <div className="p-6">
              {/* Blog Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h2>
              
              {/* Blog Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              
              {/* Blog Metadata */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              
              {/* Read More Link */}
              <Link 
                href={`/blogpost/${post.slug}`} 
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
              >
                Read More
                <ArrowRight 
                  size={18} 
                  className="ml-2 transition-transform group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}