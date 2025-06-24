import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-300" />
              <span className="text-xl font-bold">Smart Campus</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering education through innovative technology and creating a sustainable learning environment for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Campus Events
                </Link>
              </li>
              <li>
                <Link to="/noticeboard" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Noticeboard
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-blue-200 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Student Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/student-portal" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/faculty-portal" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Faculty Portal
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Library Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Campus Tour
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  123 Campus Drive, Education City, EC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@smartcampus.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Smart Campus University. All rights reserved. | 
            <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;