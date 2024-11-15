import React from 'react'
import Navbar from '../component/Navbar'  
import Footer from '../component/Footer';
const About = () => {
  return (
    <div>
      <Navbar />  

      <div className="max-w-7xl mx-auto p-6 bg-white">
        <section className="text-center py-12 ">
          <h1 className="text-4xl font-bold text-gray-800">About Our Website Building Platform</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We offer businesses, creators, and individuals an intuitive platform with AI-driven tools to build, manage, and scale websites. Whether designing, growing your audience, or streamlining operations, our platform has you covered.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-8 py-12">
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">Our Mission</h2>
            <p className="mt-4 text-gray-600">
            We offer a seamless website-building platform designed to help businesses, creators, and individuals easily achieve their online goals. With powerful AI-driven tools, you can effortlessly build, manage, and scale your website. Whether you're focused on design, growing your audience, or optimizing operations, our platform provides the features and support needed for success.
            </p>
          </div>
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">
            Our platform is intuitive, flexible, and equipped with powerful features to support businesses of all sizes. Whether you're an entrepreneur or an established company, we offer the tools you need to succeed online.
            </p>
          </div>
          <div className="flex-1 text-center p-6 shadow-lg rounded-lg bg-gray-50 transition-transform transform hover:scale-105 hover:bg-purple-50 cursor-pointer">
            <h2 className="text-2xl font-semibold text-[#4517ff]">What We Offer</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>🚀 AI-Driven Website Builder</li>
              <li>🖱️ Intuitive Drag-and-Drop Editor</li>
              <li>🌐 Custom Domains and Reliable Hosting Solutions</li>
              <li>💼 Seamless Business Solutions Integration</li>
            </ul>
          </div>
        </section>

        <section className="text-center py-16 bg-[#4517ff] text-white rounded-lg">
          <h3 className="text-3xl font-bold">Get Started with Us Today!</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
          Build the website of your vision with our comprehensive, user-friendly platform. Empower your business, strengthen your online presence, and streamline growth with powerful tools designed for seamless performance and scalability.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 cursor-pointer transition-colors duration-300 ease-in-out">
          Begin Your Journey
          </button>
        </section>

        
      </div>
      <Footer/>
    </div>
  )
}

export default About
