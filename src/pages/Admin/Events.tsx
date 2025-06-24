import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Filter, Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../../types';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  // Mock events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Tech Workshop: Introduction to React',
      description: 'Learn the basics of React development with hands-on exercises.',
      date: new Date('2024-03-15'),
      time: '14:00',
      location: 'Computer Science Lab 101',
      category: 'workshop',
      organizer: 'Dr. Sarah Johnson',
      maxAttendees: 30,
      currentAttendees: 25,
      rsvpUsers: ['1', '2', '3'],
    },
    {
      id: '2',
      title: 'Annual Sports Meet',
      description: 'Annual inter-department sports competition.',
      date: new Date('2024-03-20'),
      time: '09:00',
      location: 'University Stadium',
      category: 'sports',
      organizer: 'Physical Education Department',
      maxAttendees: 200,
      currentAttendees: 150,
      rsvpUsers: ['1', '2', '3', '4', '5'],
    },
    {
      id: '3',
      title: 'Cultural Festival',
      description: 'Celebrating diversity through music, dance, and art.',
      date: new Date('2024-03-25'),
      time: '18:00',
      location: 'Auditorium',
      category: 'cultural',
      organizer: 'Student Council',
      maxAttendees: 500,
      currentAttendees: 320,
      rsvpUsers: ['1', '2', '3', '4'],
    },
    {
      id: '4',
      title: 'Guest Lecture: AI in Education',
      description: 'Exploring the future of artificial intelligence in educational technology.',
      date: new Date('2024-03-28'),
      time: '15:30',
      location: 'Lecture Hall A',
      category: 'lecture',
      organizer: 'Computer Science Department',
      maxAttendees: 100,
      currentAttendees: 85,
      rsvpUsers: ['1', '2', '3'],
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleSelectEvent = (eventId: string) => {
    setSelectedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'lecture':
        return 'bg-green-100 text-green-800';
      case 'sports':
        return 'bg-orange-100 text-orange-800';
      case 'cultural':
        return 'bg-purple-100 text-purple-800';
      case 'general':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAttendancePercentage = (current: number, max?: number) => {
    if (!max) return 0;
    return Math.round((current / max) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600">Manage campus events and activities</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </button>
      </div>

      {/* Filters and search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="workshop">Workshop</option>
              <option value="lecture">Lecture</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
              <option value="general">General</option>
            </select>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              {filteredEvents.length} events found
            </h3>
            {selectedEvents.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {selectedEvents.length} selected
                </span>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  Delete Selected
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryBadgeColor(event.category)}`}>
                          {event.category}
                        </span>
                        <input
                          type="checkbox"
                          checked={selectedEvents.includes(event.id)}
                          onChange={() => handleSelectEvent(event.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date.toLocaleDateString()} at {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          {event.currentAttendees}/{event.maxAttendees} attendees
                          <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">
                            {getAttendancePercentage(event.currentAttendees, event.maxAttendees)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Organized by {event.organizer}</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 