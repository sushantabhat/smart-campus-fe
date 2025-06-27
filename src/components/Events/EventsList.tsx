import React from 'react';
import { useEvents, useJoinEvent, useLeaveEvent } from '../../api/hooks/useEvents';
import { Event } from '../../api/types/events';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventsList: React.FC = () => {
  const { data: events, isLoading, error } = useEvents();
  const joinEventMutation = useJoinEvent();
  const leaveEventMutation = useLeaveEvent();

  const handleJoinEvent = async (eventId: string) => {
    try {
      await joinEventMutation.mutateAsync(eventId);
    } catch (error) {
      console.error('Failed to join event:', error);
    }
  };

  const handleLeaveEvent = async (eventId: string) => {
    try {
      await leaveEventMutation.mutateAsync(eventId);
    } catch (error) {
      console.error('Failed to leave event:', error);
    }
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
    <div className="space-y-4">
      {events.map((event: Event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              event.category === 'academic' ? 'bg-blue-100 text-blue-800' :
              event.category === 'social' ? 'bg-green-100 text-green-800' :
              event.category === 'sports' ? 'bg-orange-100 text-orange-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {event.category}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(event.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              {event.time}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              {event.currentAttendees} / {event.maxAttendees || '∞'} attendees
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Organized by {event.organizer}</p>
            <div className="space-x-2">
              <button
                onClick={() => handleJoinEvent(event.id)}
                disabled={joinEventMutation.isPending}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm"
              >
                {joinEventMutation.isPending ? 'Joining...' : 'Join'}
              </button>
              <button
                onClick={() => handleLeaveEvent(event.id)}
                disabled={leaveEventMutation.isPending}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 text-sm"
              >
                {leaveEventMutation.isPending ? 'Leaving...' : 'Leave'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList; 