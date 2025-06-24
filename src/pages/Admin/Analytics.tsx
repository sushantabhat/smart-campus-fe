import React from 'react';
import { TrendingUp, Users, Calendar, FileText, GraduationCap, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
    },
    {
      name: 'Active Events',
      value: '23',
      change: '+5%',
      changeType: 'positive',
      icon: Calendar,
    },
    {
      name: 'Published Notices',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: FileText,
    },
    {
      name: 'Programs',
      value: '45',
      change: '+2%',
      changeType: 'positive',
      icon: GraduationCap,
    },
  ];

  const userStats = {
    students: 850,
    faculty: 120,
    admin: 15,
    total: 985,
  };

  const eventStats = [
    { month: 'Jan', events: 12, attendees: 450 },
    { month: 'Feb', events: 18, attendees: 680 },
    { month: 'Mar', events: 23, attendees: 890 },
    { month: 'Apr', events: 15, attendees: 520 },
    { month: 'May', events: 28, attendees: 1200 },
    { month: 'Jun', events: 22, attendees: 950 },
  ];

  const topEvents = [
    { name: 'Tech Workshop', attendees: 150, category: 'Workshop' },
    { name: 'Annual Sports Meet', attendees: 320, category: 'Sports' },
    { name: 'Cultural Festival', attendees: 280, category: 'Cultural' },
    { name: 'Guest Lecture', attendees: 120, category: 'Lecture' },
  ];

  const recentActivity = [
    { type: 'user', message: 'New student registered', time: '2 min ago' },
    { type: 'event', message: 'Event created', time: '15 min ago' },
    { type: 'notice', message: 'Notice published', time: '1 hour ago' },
    { type: 'program', message: 'Program updated', time: '2 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">System insights and performance metrics</p>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                      <span className="sr-only">{stat.changeType === 'positive' ? 'Increased' : 'Decreased'} by</span>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Distribution */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">User Distribution</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Students</span>
                  <span className="text-sm font-semibold text-gray-900">{userStats.students}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(userStats.students / userStats.total) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Faculty</span>
                  <span className="text-sm font-semibold text-gray-900">{userStats.faculty}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(userStats.faculty / userStats.total) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Admin</span>
                  <span className="text-sm font-semibold text-gray-900">{userStats.admin}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full" 
                    style={{ width: `${(userStats.admin / userStats.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Events */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Events</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{event.name}</p>
                      <p className="text-xs text-gray-500">{event.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{event.attendees}</p>
                      <p className="text-xs text-gray-500">attendees</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="flow-root">
                <ul className="-mb-8">
                  {recentActivity.map((activity, activityIdx) => (
                    <li key={activityIdx}>
                      <div className="relative pb-8">
                        {activityIdx !== recentActivity.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <Activity className="h-4 w-4 text-white" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">{activity.message}</p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time>{activity.time}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Statistics Chart */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Event Statistics (Last 6 Months)</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-6 gap-4">
            {eventStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-500">{stat.month}</div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{stat.events}</div>
                <div className="text-xs text-gray-500">{stat.attendees} attendees</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(stat.events / Math.max(...eventStats.map(s => s.events))) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 