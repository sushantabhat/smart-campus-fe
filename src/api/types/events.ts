export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  category: 'academic' | 'social' | 'sports' | 'cultural';
  isPublic: boolean;
  maxAttendees?: number;
  currentAttendees: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventRequest {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: Event['category'];
  isPublic: boolean;
  maxAttendees?: number;
}

export interface UpdateEventRequest extends Partial<CreateEventRequest> {
  id: string;
}

export interface EventsResponse {
  success: boolean;
  data: Event[];
  message?: string;
}

export interface EventResponse {
  success: boolean;
  data: Event;
  message?: string;
} 