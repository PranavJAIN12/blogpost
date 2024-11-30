import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 bg-secondary/10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          Behind every great blog is a passionate team dedicated to inspiring and educating developers worldwide.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Mission Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            At BlogVerse, our mission is to create a hub for developers and tech enthusiasts where they can explore cutting-edge trends, 
            enhance their skills, and foster a supportive community. We believe in simplifying complex topics and empowering individuals 
            to turn ideas into reality.
          </p>
        </section>

        {/* Our Team Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", role: "Founder & Editor", bio: "Alice is a tech blogger with 10+ years of experience in simplifying tech for everyday developers." },
              { name: "Bob Carter", role: "Lead Developer", bio: "Bob specializes in building scalable applications and enjoys creating tools to make coding fun and easy." },
              { name: "Claire Williams", role: "Designer", bio: "Claire crafts user-centric designs with a focus on usability and aesthetic appeal." },
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/10 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

       

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "BlogVerse has been a game-changer for my career. The tutorials are detailed and easy to follow.", author: "John Doe, Full-Stack Developer" },
              { quote: "I love the practical examples and hands-on guides. The team really knows their stuff!", author: "Jane Smith, Software Engineer" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-muted-foreground italic mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-sm text-muted-foreground">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Be part of our journey as we continue to inspire and empower developers worldwide.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow">
            Subscribe Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground border-t border-secondary/20 mt-12">
        © {new Date().getFullYear()} BlogVerse. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Page;
