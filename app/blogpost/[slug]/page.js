export default function Page({ params }) {
    const blog = {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into the world of React Hooks and how they revolutionize state management.",
      slug: "understanding-react-hooks",
      date: "2024-01-15",
      author: "Sarah Johnson",
      image: "/placeholder-image.jpg",
      content:
        "<p>React Hooks simplify state management and side-effects in functional components. Learn how to use them effectively!</p>",
    };
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6 ">{blog.title}</h1>
  
        {/* Description */}
        <p className="text-xl mb-4 border-l-4 border-gray-300 pl-4 italic ">
          {blog.description}
        </p>
  
        {/* Author and Date */}
        <div className="flex items-center mb-6 gap-4">
          <h2 className="text-lg font-medium text-gray-500">By {blog.author}</h2>
          <p className="text-md text-gray-500">{blog.date}</p>
        </div>
  
        {/* Blog Content */}
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="prose prose-lgleading-relaxed"
        ></div>
      </div>
    );
  }
  