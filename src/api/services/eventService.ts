import { apiClient } from '../config/axios';
import { 
  CreateEventRequest, 
  UpdateEventRequest, 
  EventsResponse, 
  EventResponse 
} from '../types/events';

export const eventService = {
  async getEvents(): Promise<EventsResponse> {
    const response = await apiClient.get<EventsResponse>('/events');
    return response.data;
  },

  async getEvent(id: string): Promise<EventResponse> {
    const response = await apiClient.get<EventResponse>(`/events/${id}`);
    return response.data;
  },

  async createEvent(eventData: CreateEventRequest): Promise<EventResponse> {
    const response = await apiClient.post<EventResponse>('/events', eventData);
    return response.data;
  },

  async updateEvent(eventData: UpdateEventRequest): Promise<EventResponse> {
    const { id, ...data } = eventData;
    const response = await apiClient.put<EventResponse>(`/events/${id}`, data);
    return response.data;
  },

  async deleteEvent(id: string): Promise<{ success: boolean; message: string }> {
    const response = await apiClient.delete<{ success: boolean; message: string }>(`/events/${id}`);
    return response.data;
  },

  async joinEvent(eventId: string): Promise<{ success: boolean; message: string }> {
    const response = await apiClient.post<{ success: boolean; message: string }>(`/events/${eventId}/join`);
    return response.data;
  },

  async leaveEvent(eventId: string): Promise<{ success: boolean; message: string }> {
    const response = await apiClient.post<{ success: boolean; message: string }>(`/events/${eventId}/leave`);
    return response.data;
  },
}; 