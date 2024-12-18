import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FileCode } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../auth/AuthContext"; // Import AuthContext
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const LoginPage = () => {
  const canvasRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login method from context

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase authentication
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


  // Google login success handler
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    const userData = {
      name: credentialResponseDecoded.name,
      email: credentialResponseDecoded.email,
      imageUrl: credentialResponseDecoded.picture,
    };

    login(userData); // Set user data in context
    toast.success("Login Success!");
    navigate("/"); // Navigate to home page after login
  };

  // Google login error handler
  const handleGoogleLoginError = () => {
    toast.error("Google Login Failed");
  };

  return (
    <Flex
    className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 relative overflow-hidden p-4"
    >
      <Toaster position="top-right" />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
      <motion.div
        className="g-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          spacing={6}
          bg={useColorModeValue("white", "gray.700")}
          rounded="lg"
          boxShadow="lg"
          p={8}
          w="full"
          maxW="md"
        >
          <Center>
            <FileCode size={40} color="#3182CE" />
          </Center>
          <Heading
            fontSize="2xl"
            textAlign="center"
            color={useColorModeValue("gray.800", "white")}
          >
            Welcome Back
          </Heading>
          <Text
            textAlign="center"
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Sign in to access your account
          </Text>
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="blue"
                type="submit"
                size="lg"
                fontSize="md"
                w="full"
              >
                Login
              </Button>
            </Stack>
          </form>
          <Text textAlign="center" fontSize="sm" color="gray.600">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#3182CE" }}>
              Register
            </Link>
          </Text>

          <Center>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </Center>
        </Stack>
      </motion.div>
    </Flex>
  );
};

export default LoginPage;
