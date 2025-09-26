import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Award, Users, Mail, Home, Play, GraduationCap, Sparkles, Crown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      icon: <Home size={16} />,
      name: "Home",
      description: "Your IELTS journey starts here",
      href: "#home",
    },
    {
      icon: <BookOpen size={16} />,
      name: "Courses",
      description: "Comprehensive IELTS preparation",
      href: "#courses",
    },
    {
      icon: <Award size={16} />,
      name: "Mock Tests",
      description: "Practice with real exam conditions",
      href: "#mock-tests",
    },
    {
      icon: <Users size={16} />,
      name: "About",
      description: "Learn about our methodology",
      href: "#about",
    },
    {
      icon: <Mail size={16} />,
      name: "Contact",
      description: "Get in touch with our experts",
      href: "#contact",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 shadow-lg py-2 border-b border-blue-900"
            : "bg-gradient-to-b from-gray-900 to-black py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center focus:outline-none group">
                <div
                  className={`relative overflow-hidden transition-all duration-300 ${
                    scrolled ? "h-10 w-10" : "h-12 w-12"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-full w-full p-2 text-white" />
                  </div>
                  {!scrolled && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
                <div className="ml-3">
                  <span
                    className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      scrolled ? "text-xl" : "text-2xl"
                    }`}
                  >
                    ExcelIELTS
                  </span>
                  <div
                    className={`text-xs text-gray-400 transition-opacity duration-300 ${
                      scrolled ? "opacity-0 h-0" : "opacity-100"
                    }`}
                  >
                    Master Your IELTS Journey
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Menu Items */}
              <div className="flex items-center space-x-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-800 group"
                  >
                    <span className="mr-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <div className="border-l pl-4 border-gray-700">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center group">
                  <Crown size={16} className="mr-2 group-hover:animate-pulse" />
                  <span>Start Learning</span>
                  <Sparkles size={14} className="ml-2 text-yellow-300" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-900 transition-all duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out border-l border-blue-800 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-blue-800">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 font-bold text-lg text-white">
                ExcelIELTS
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-900 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="py-2 px-4">
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 w-full text-left rounded-lg transition-all duration-200 text-gray-300 hover:bg-blue-900 hover:text-white group"
              >
                <span className="mr-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="border-t border-blue-800 mt-2 pt-4 px-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 flex items-center justify-center group"
            >
              <Play size={18} className="mr-2 group-hover:animate-pulse" />
              Start Learning
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`${scrolled ? 'h-16' : 'h-20'} transition-all duration-300`}></div>
    </>
  );
};

export default Navigation;