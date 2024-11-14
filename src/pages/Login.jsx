import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FileCode } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { auth, signInWithEmailAndPassword } from "../js/firebase"; // Import Firebase auth functions

const LoginPage = () => {
  const canvasRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 200, 255, 0.5)";
        ctx.fill();
      });
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle login form submission with Firebase
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!"); // Success toast
      // Navigate to the dashboard or another page on successful login
      setTimeout(() => {
        navigate("/"); // Example route after login
      }, 2000);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Password is incorrect"); // Error toast for incorrect password
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found"); // Error toast for user not found
      } else {
        toast.error("An error occurred. Please try again."); // Generic error toast
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 relative overflow-hidden p-4">
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FileCode className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-primary text-center">
            Welcome to WebCraft
          </h1>
        </motion.div>
        <motion.p
          className="text-center text-black mb-6 sm:mb-8 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your website building journey begins here
        </motion.p>
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleLogin} 
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button
            type="submit"
            className="w-full bg-primary text-black px-4 py-2 rounded border border-slate-950 text-base sm:text-xl transition-all duration-300 hover:bg-black hover:text-white"
          >
            Sign In
          </button>
        </motion.form>
        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs sm:text-sm text-black">
          By proceeding, you agree to WebCraft{" "}
            <Link to="/terms" className="text-primary hover:underline">
            Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
