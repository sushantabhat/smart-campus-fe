import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Filter, Pin } from 'lucide-react';
import { Notice } from '../../types';

const Notices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedNotices, setSelectedNotices] = useState<string[]>([]);

  // Mock notices data
  const notices: Notice[] = [
    {
      id: '1',
      title: 'Exam Schedule for Spring 2024',
      content: 'The examination schedule for the Spring 2024 semester has been published. Please check your student portal for details.',
      category: 'exam',
      priority: 'high',
      publishDate: new Date('2024-03-01'),
      expiryDate: new Date('2024-04-30'),
      author: 'Academic Office',
      pinned: true,
    },
    {
      id: '2',
      title: 'Campus Maintenance Notice',
      content: 'Scheduled maintenance will be carried out in the library building from March 15-17. Services may be temporarily unavailable.',
      category: 'alert',
      priority: 'medium',
      publishDate: new Date('2024-03-10'),
      expiryDate: new Date('2024-03-18'),
      author: 'Facilities Management',
      pinned: false,
    },
    {
      id: '3',
      title: 'Student Council Elections',
      content: 'Nominations are now open for Student Council elections. Submit your nominations by March 25th.',
      category: 'general',
      priority: 'medium',
      publishDate: new Date('2024-03-12'),
      expiryDate: new Date('2024-03-26'),
      author: 'Student Affairs',
      pinned: true,
    },
    {
      id: '4',
      title: 'Research Grant Opportunities',
      content: 'New research grant opportunities are available for faculty members. Application deadline is April 15th.',
      category: 'academic',
      priority: 'low',
      publishDate: new Date('2024-03-14'),
      expiryDate: new Date('2024-04-16'),
      author: 'Research Office',
      pinned: false,
    },
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || notice.category === categoryFilter;
    const matchesPriority = priorityFilter === 'all' || notice.priority === priorityFilter;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  const handleSelectNotice = (noticeId: string) => {
    setSelectedNotices(prev => 
      prev.includes(noticeId) 
        ? prev.filter(id => id !== noticeId)
        : [...prev, noticeId]
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exam':
        return 'bg-blue-100 text-blue-800';
      case 'alert':
        return 'bg-red-100 text-red-800';
      case 'academic':
        return 'bg-green-100 text-green-800';
      case 'general':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
          <p className="text-gray-600">Manage campus notices and announcements</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Post Notice
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
                placeholder="Search notices..."
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
              <option value="exam">Exam</option>
              <option value="alert">Alert</option>
              <option value="academic">Academic</option>
              <option value="general">General</option>
            </select>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Notices list */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              {filteredNotices.length} notices found
            </h3>
            {selectedNotices.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {selectedNotices.length} selected
                </span>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  Delete Selected
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  checked={selectedNotices.includes(notice.id)}
                  onChange={() => handleSelectNotice(notice.id)}
                  className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {notice.pinned && (
                          <Pin className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(notice.category)}`}>
                          {notice.category}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(notice.priority)}`}>
                          {notice.priority}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{notice.content}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>By {notice.author}</span>
                        <span>Published: {notice.publishDate.toLocaleDateString()}</span>
                        {notice.expiryDate && (
                          <span>Expires: {notice.expiryDate.toLocaleDateString()}</span>
                        )}
                      </div>
                    </div>
                    
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
  );
};

export default Notices; 