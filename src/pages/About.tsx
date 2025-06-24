import React from 'react';
import { GraduationCap, Users, Calendar, Award, Globe, Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10,000+', label: 'Students', icon: Users },
    { number: '500+', label: 'Faculty Members', icon: GraduationCap },
    { number: '50+', label: 'Programs', icon: Award },
    { number: '100+', label: 'Events Yearly', icon: Calendar },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to academic excellence and continuous improvement in all aspects of education.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Fostering a supportive and inclusive community where every member feels valued and heard.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing technology and innovative approaches to enhance the learning experience.',
    },
    {
      icon: Zap,
      title: 'Leadership',
      description: 'Developing future leaders through comprehensive education and practical experience.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Smart Campus was established with a vision to revolutionize higher education.',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Launched comprehensive digital platforms for students and faculty.',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Expanded programs and introduced new departments and facilities.',
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Established innovation centers and research facilities.',
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Leading the way in smart education with cutting-edge technology.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Smart Campus
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforming education through technology, innovation, and community engagement
            </p>
            <div className="flex justify-center">
              <GraduationCap className="h-16 w-16 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To provide exceptional education through innovative technology, fostering a community of learners 
              who are prepared to meet the challenges of tomorrow. We strive to create an inclusive environment 
              where every student can thrive and achieve their full potential.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to excellence extends beyond the classroom, as we prepare students to become 
              responsible global citizens and leaders in their chosen fields.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be a leading institution in smart education, recognized for our innovative approach to 
              learning, cutting-edge research, and commitment to student success. We envision a future 
              where technology enhances every aspect of the educational experience.
            </p>
            <p className="text-lg text-gray-600">
              Through continuous innovation and collaboration, we aim to shape the future of education 
              and empower the next generation of leaders, thinkers, and innovators.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By The Numbers</h2>
            <p className="text-lg text-gray-600">Our impact in numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <value.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our development</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of an innovative educational experience that prepares you for the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 