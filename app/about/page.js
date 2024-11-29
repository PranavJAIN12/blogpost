import React from "react";

const Page = () => {
  return (
    <div className=" text-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl">
          Discover the story behind our blog and the team working tirelessly to bring you amazing content!
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            We strive to empower developers and tech enthusiasts by providing insightful articles,
            helpful tutorials, and an engaging community.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
              <h3 className="text-lg font-bold mb-2">Alice Doe</h3>
              <p className="text-gray-400">Content Creator</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
              <h3 className="text-lg font-bold mb-2">Bob Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
              <h3 className="text-lg font-bold mb-2">Charlie Lee</h3>
              <p className="text-gray-400">UI/UX Designer</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>We’ve published over 100+ articles.</li>
            <li>Our team loves coffee, a lot!</li>
            <li>Dark mode is our favorite theme!</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-700 mt-12">
        © {new Date().getFullYear()} Markdown Blog. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Page;
