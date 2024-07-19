import React from 'react'

const CustomApp = () => {
  return (
    <>
      <BlogLayout/>
    </>
  )
}

export default CustomApp

const BlogLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">My Blog</h1>
          </div>
        </header>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row mt-4">
          <main className="lg:w-2/3 lg:mr-4">
            <article className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec velit ligula. Integer eget dolor metus.</p>
              <a href="#" className="text-blue-500 mt-2 inline-block">Read more</a>
            </article>
            {/* Add more articles as needed */}
          </main>
          <aside className="lg:w-1/3 mt-4 lg:mt-0">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">About Me</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec velit ligula. Integer eget dolor metus.</p>
            </div>
          </aside>
        </div>
        <footer className="bg-gray-800 text-white py-4 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };
