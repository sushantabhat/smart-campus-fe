import React, { useState } from 'react';
import { useEvents, useRegisterForEvent, useUnregisterFromEvent } from '../../api/hooks/useEvents';
import { Event } from '../../api/types/events';
import { Calendar, MapPin, Users, Clock, Eye, Edit, Trash2 } from 'lucide-react';

const categoryColors: Record<string, string> = {
  academic: 'bg-blue-100 text-blue-800',
  social: 'bg-green-100 text-green-800',
  sports: 'bg-orange-100 text-orange-800',
  technical: 'bg-purple-100 text-purple-800',
  cultural: 'bg-pink-100 text-pink-800',
  workshop: 'bg-yellow-100 text-yellow-800',
  seminar: 'bg-indigo-100 text-indigo-800',
  conference: 'bg-gray-100 text-gray-800',
  other: 'bg-gray-200 text-gray-800',
};

const EventsList: React.FC = () => {
  const { data: eventsResponse, isLoading, error } = useEvents();
  const registerEventMutation = useRegisterForEvent();
  const unregisterEventMutation = useUnregisterFromEvent();
  const events = eventsResponse?.data?.events || [];
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const handleSelectEvent = (eventId: string) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleSelectAll = () => {
    if (selectedEvents.length === events.length) {
      setSelectedEvents([]);
    } else {
      setSelectedEvents(events.map((event) => event._id));
    }
  };

  const handleJoinEvent = async (eventId: string) => {
    try {
      await registerEventMutation.mutateAsync(eventId);
    } catch (error) {
      console.error('Failed to join event:', error);
    }
  };

  const handleLeaveEvent = async (eventId: string) => {
    try {
      await unregisterEventMutation.mutateAsync(eventId);
    } catch (error) {
      console.error('Failed to leave event:', error);
    }
  };

  // Placeholder handlers for actions
  const handleView = (event: Event) => {
    // TODO: Open view modal
    alert(`View event: ${event.title}`);
  };
  const handleEdit = (event: Event) => {
    // TODO: Open edit modal
    alert(`Edit event: ${event.title}`);
  };
  const handleDelete = (event: Event) => {
    // TODO: Open delete confirmation
    alert(`Delete event: ${event.title}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Failed to load events. Please try again later.</p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No events found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white rounded-2xl shadow p-6 flex flex-col border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category] || 'bg-gray-100 text-gray-800'}`}>{event.category}</span>
            <input
              type="checkbox"
              checked={selectedEvents.includes(event._id)}
              onChange={() => handleSelectEvent(event._id)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{event.title}</h3>
          <p className="text-gray-600 mb-3 line-clamp-3">{event.description}</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(event.startDate).toLocaleDateString()} {event.startTime} - {new Date(event.endDate).toLocaleDateString()} {event.endTime}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {[event.location.venue, event.location.room, event.location.building, event.location.campus].filter(Boolean).join(', ')}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              {event.currentAttendees} / {event.maxAttendees || '∞'} attendees
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm text-gray-500">Organized by {event.organizer.fullName}</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleView(event)}
                className="text-blue-600 hover:text-blue-900"
                title="View Event"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleEdit(event)}
                className="text-green-600 hover:text-green-900"
                title="Edit Event"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(event)}
                className="text-red-600 hover:text-red-900"
                title="Delete Event"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList; 