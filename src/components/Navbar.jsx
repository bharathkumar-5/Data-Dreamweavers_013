import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useAuth } from "../auth/AuthContext"; // Import AuthContext

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-3 rounded-md font-medium ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const handleRedirect = () => {
  window.location.href = '/register';
};

const NavItem = ({ item }) => (
  <motion.div
    className="text-sm font-medium"
    whileHover={{ scale: 1.1 }}
  >
    {item}
  </motion.div>
);

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white"
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-2xl">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-4">
        {[{ name: 'About', path: '/about' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'Contact', path: '/contact' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'Enterprise', path: '/enterprise' }]
          .map((item) => (
            <motion.div
              key={item.name}
              className="text-lg font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path} onClick={onClose}>{item.name}</Link>
            </motion.div>
          ))}
      </nav>
    </motion.div>,
    document.body
  );
};

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="flex items-center justify-between px-4 py-4 bg-white"
      >
        <div className="flex items-center space-x-6">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">WebCraft</Link>
          </motion.div>
          <nav className="hidden md:flex space-x-4">
            <NavItem item={<Link to="/about">About</Link>} />
            <NavItem item={<Link to="/solutions">Solutions</Link>} />
            <NavItem item={<Link to="/contact">Contact</Link>} />
            <NavItem item={<Link to="/pricing">Pricing</Link>} />
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="text-sm font-medium">Hello, {user.name}</div>
              <Button className="text-sm" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button className="hidden md:inline-flex items-center text-sm">
                <Link to="/register">Sign Up</Link>
              </Button>
              <Button className="bg-gradient-to-br from-pink-500 to-yellow-300 p-8 rounded-lg shadow-2xl transform hover:scale-105 text-sm" onClick={handleRedirect}>
                Get Started
              </Button>
            </>
          )}

          <Button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
