import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Calendar, Settings } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const faqData: { [key: string]: FAQCategory } = {
    general: {
      title: 'General Questions',
      icon: HelpCircle,
      items: [
        {
          question: 'What is Smart Campus?',
          answer: 'Smart Campus is a comprehensive digital platform that connects students, faculty, and administrators through innovative technology. It provides tools for course management, event organization, communication, and academic tracking.',
        },
        {
          question: 'How do I get started with Smart Campus?',
          answer: 'Getting started is easy! Simply register for an account using your institutional email, verify your email address, and log in to access your personalized dashboard based on your role (student, faculty, or admin).',
        },
        {
          question: 'Is Smart Campus free to use?',
          answer: 'Smart Campus is provided as part of your institutional membership. There are no additional costs for students, faculty, or staff members of participating institutions.',
        },
        {
          question: 'What devices are supported?',
          answer: 'Smart Campus is fully responsive and works on all devices including desktop computers, laptops, tablets, and smartphones. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience.',
        },
      ],
    },
    academic: {
      title: 'Academic & Courses',
      icon: BookOpen,
      items: [
        {
          question: 'How do I enroll in courses?',
          answer: 'Course enrollment is typically handled through your academic advisor or the registration office. Once enrolled, your courses will automatically appear in your Smart Campus dashboard.',
        },
        {
          question: 'How can I view my grades?',
          answer: 'Students can view their grades by logging into their dashboard and navigating to the "My Grades" section. Grades are updated by faculty members and are typically available within 48 hours of submission.',
        },
        {
          question: 'What if I need to drop a course?',
          answer: 'Course drops must be processed through your academic advisor or the registration office. Please contact them directly for assistance with course changes.',
        },
        {
          question: 'How do I access course materials?',
          answer: 'Course materials are available in your course dashboard. Faculty members upload syllabi, assignments, readings, and other resources that you can access anytime.',
        },
      ],
    },
    student: {
      title: 'Student Services',
      icon: Users,
      items: [
        {
          question: 'How do I update my profile information?',
          answer: 'You can update your profile information by clicking on your profile picture in the top right corner and selecting "Edit Profile". Make sure to save your changes.',
        },
        {
          question: 'How do I register for campus events?',
          answer: 'Browse available events in the Events section and click "Register" for any event you\'d like to attend. You\'ll receive a confirmation email and the event will appear in your calendar.',
        },
        {
          question: 'What student services are available?',
          answer: 'We offer a wide range of student services including academic advising, career counseling, health services, housing assistance, and more. Visit the Student Services section for detailed information.',
        },
        {
          question: 'How do I contact my academic advisor?',
          answer: 'You can contact your academic advisor through the messaging system in your dashboard, or find their contact information in the Faculty Directory section.',
        },
      ],
    },
    events: {
      title: 'Events & Activities',
      icon: Calendar,
      items: [
        {
          question: 'How do I create an event?',
          answer: 'Faculty and staff members can create events through their dashboard. Students can suggest events by contacting the student activities office.',
        },
        {
          question: 'Can I cancel my event registration?',
          answer: 'Yes, you can cancel your registration up to 24 hours before the event. Go to your Events dashboard and click "Cancel Registration" next to the event.',
        },
        {
          question: 'How do I get notifications about new events?',
          answer: 'You can enable event notifications in your account settings. You\'ll receive email notifications for new events and reminders for events you\'ve registered for.',
        },
        {
          question: 'Are there virtual events available?',
          answer: 'Yes, we offer both in-person and virtual events. Virtual events include webinars, online workshops, and digital networking opportunities.',
        },
      ],
    },
    technical: {
      title: 'Technical Support',
      icon: Settings,
      items: [
        {
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click on the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your email to reset your password.',
        },
        {
          question: 'The platform is not loading properly. What should I do?',
          answer: 'Try clearing your browser cache and cookies, then refresh the page. If the issue persists, try using a different browser or contact technical support.',
        },
        {
          question: 'How do I enable two-factor authentication?',
          answer: 'Go to your Account Settings and look for the Security section. You can enable two-factor authentication there for enhanced account security.',
        },
        {
          question: 'Can I access Smart Campus offline?',
          answer: 'Some features are available offline, but for the best experience, we recommend using Smart Campus with an internet connection.',
        },
      ],
    },
  };

  const toggleItem = (categoryKey: string, itemIndex: number) => {
    const key = `${categoryKey}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categories = Object.keys(faqData);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about Smart Campus
            </p>
            <div className="flex justify-center">
              <HelpCircle className="h-16 w-16 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Can't find what you're looking for?</h2>
            <p className="text-gray-600">Search our knowledge base or contact support</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search questions..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((categoryKey) => {
            const category = faqData[categoryKey];
            const Icon = category.icon;
            return (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === categoryKey
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqData[activeCategory].items.map((item, index) => {
            const key = `${activeCategory}-${index}`;
            const isOpen = openItems[key];
            return (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4">
                <button
                  onClick={() => toggleItem(activeCategory, index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 mb-4">Browse our comprehensive help articles</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Visit Help Center
              </button>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get in touch with our support team</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Contact Us
              </button>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with a support representative</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 