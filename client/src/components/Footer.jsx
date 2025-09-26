import { BookOpen, Mail, Home, Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  const Social = [
    { icon: Facebook, color: "hover:text-blue-400" },
    { icon: Twitter, color: "hover:text-sky-400" },
    { icon: Instagram, color: "hover:text-pink-400" },
    { icon: Linkedin, color: "hover:text-blue-500" },
  ]

  const QuickLinks = [
    { name: "About Us", desc: "Our story & mission" },
    { name: "Courses", desc: "Comprehensive programs" },
    { name: "Mock Tests", desc: "Practice & improve" },
    { name: "Success Stories", desc: "Student achievements" },
    { name: "Blog", desc: "Tips & insights" },
  ]
  const ContactInfo = [
    { name: "+91 9284372614", desc: "Call us anytime", icon: Phone, link: "tel:+919284372614" },
    { name: "araut7798@gmail.com", desc: "Quick response", icon: Mail, link: "mailto:araut7798@gmail.com" },
    {
      name: "Visit Our Center",
      desc: "123 Education Street, Learning District, City 560001",
      icon: MapPin,
      link: "#",
    },
  ]
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-pink-500/10 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">

            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-4 group">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="ml-3">
                  <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    ExcelIELTS
                  </span>
                  <div className="text-xs text-gray-400 hidden sm:block">Excellence in Education</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
                Leading IELTS preparation institute helping students achieve their dreams worldwide with cutting-edge learning methods.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                {Social.map(({ icon: Icon, color }, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-150"></div>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 ${color} cursor-pointer transition-all duration-300 transform group-hover:scale-125 relative z-10`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white flex items-center justify-center sm:justify-start">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {QuickLinks.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group block text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 sm:hover:translate-x-2">
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                      <span className="block sm:inline text-xs text-gray-500 sm:ml-2 group-hover:text-gray-300 mt-0.5 sm:mt-0">
                        {item.desc}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white flex items-center justify-center sm:justify-start">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: "IELTS Academic", desc: "University preparation" },
                  { name: "IELTS General", desc: "Immigration & work" },
                  { name: "Speaking Practice", desc: "Build confidence" },
                  { name: "Writing Correction", desc: "Expert feedback" },
                  { name: "One-on-One Tutoring", desc: "Personalized coaching" },
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group block text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 sm:hover:translate-x-2">
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                      <span className="block sm:inline text-xs text-gray-500 sm:ml-2 group-hover:text-gray-300 mt-0.5 sm:mt-0">
                        {item.desc}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left max-w-md mx-auto sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white flex items-center justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" />
                Contact Info
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {ContactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="group flex flex-col sm:flex-row items-center sm:items-start text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-0 sm:hover:translate-x-2"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-3 flex-shrink-0 text-white group-hover:text-green-400" />
                        <div className="text-center sm:text-left break-words">
                          <span className="block font-medium text-sm sm:text-base">{item.name}</span>
                          <span className="block text-xs text-gray-500 group-hover:text-gray-300 mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-4 lg:space-y-0">

              {/* Copyright Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">Made with</span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs">❤️</span>
                  </div>
                  <span className="text-gray-400 text-sm">by</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm sm:text-base">
                    Aditya Raut
                  </span>
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">© 2025 All rights reserved</div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end space-x-4 sm:space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium hover:underline decoration-blue-400 underline-offset-4"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
