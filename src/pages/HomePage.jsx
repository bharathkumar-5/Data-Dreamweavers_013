import React from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Homepage() {
  const Button = ({ children, className, ...props }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const handleRedirect = () => {
    window.location.href = '/register';
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full font-sans">
      <Navbar />

      <main className="flex-grow">
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="bg-[#002b50] text-white py-16 md:py-24 px-4 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Build a Limitless Website
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Build and scale with confidence. From an advanced website builder to comprehensive business solutions, we provide everything you need.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-gradient-to-br from-pink-500 to-yellow-300 p-8 rounded-lg shadow-2xl transform hover:scale-105 text-lg px-6 py-3 sm:px-8 sm:py-4" onClick={handleRedirect}>
            Begin Now
            </Button>
          </motion.div>
          <motion.p variants={fadeIn} className="mt-4 text-sm">
          Activate Your 30-Day Free Trial Now !
          </motion.p>
        </motion.section>

        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-100 to-purple-300"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              variants={fadeIn}
              className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Make It Your Own
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "User-Friendly Drag-and-Drop Website Editor",
                  "Over 100 Advanced Web Design Features",
                  "Advanced AI Tools for Seamless Customization",
                  "Comprehensive Full-Stack Development Tools for Custom Functionality",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="bg-gradient-to-br from-pink-500 to-yellow-300 p-8 rounded-lg shadow-2xl transform hover:scale-105 text-lg px-6 py-3 sm:px-8 sm:py-4" onClick={handleRedirect}>
              Begin Your Journey
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="w-full md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source
                    src="https://video.wixstatic.com/video/a261d7_46e3c75913564d87a4379c0d8d20f335/360p/mp4/file.mp4"
                    type="video/mp4"
                  />
                  This video format is not supported by your browser.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div
          className="w-full bg-fixed bg-cover bg-center py-24 sm:py-32 md:py-40 lg:py-48 relative"
          style={{
            backgroundImage:
              "url('https://i.ytimg.com/vi/WH6t4nC0Ueg/maxresdefault.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="max-w-7xl mx-auto relative z-10 px-4">
            <div className="w-full sm:w-2/3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fadeInUp">
              Experience the Wonder of
                <br />
                Parallax Effects!
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition duration-300">
              <img
                src="https://cdn-i.pageflow.io/website_legacy_blog_posts/uploads/2020/04/MacBook-Pro-Mockup_Pexels_2.jpg"
                alt="Smartphone"
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Seamless Pexels Image Integration
              </h3>
              <p className="text-gray-600">
              Quickly find the ideal royalty-free image with our integrated search feature.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-yellow-300 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Design Stunning Gradients with Ease
              </h3>
              <p className="text-gray-800 text-base sm:text-lg">
              Create stunning gradients effortlessly with intuitive sliders and simple controls.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
              A Wide Selection of Emojis 😎
              </h3>
              <p className="text-gray-600 mb-6">
              Enhance your content with emojis for added personality and flair.
              </p>
              <ul className="text-left space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="text-2xl mr-4">🦉</span>Comprehensive Emoji List
                </li>
                <li className="flex items-center ml-8">
                  <span className="text-2xl mr-4">✅</span>Checkmark for Clarity
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">🦉</span>Another Key Insight
                </li>
                <li className="flex items-center ml-8">
                  <span className="text-2xl mr-4">🐹</span>Additional Insight (Mind-Blowing!)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 sm:py-24 bg-gray-100 rounded-lg shadow-inner my-8 px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 animate-fadeInLeft">
              Why Delay?
              </h2>
              <h3 className="text-2xl sm:text-3xl text-gray-600 animate-fadeInLeft animation-delay-300">
              Let's Begin Crafting Something Exceptional!
              </h3>
            </div>
            <div
              className="w-full md:w-1/3 h-48 sm:h-56 md:h-64 bg-cover bg-center rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/crafting-responsive-internet-website-multipurpose-excellence-project-6_954894-55113.jpg')",
              }}
            ></div>
          </div>
        </div>
      </main>

     <Footer/>
    </div>
  );
}
    