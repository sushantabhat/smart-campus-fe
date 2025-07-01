import { apiClient } from '../config/axios';
import { Program } from '../types/programs';

export const getPrograms = () => apiClient.get('/programs');
export const getProgramById = (id: string) => apiClient.get(`/programs/${id}`);
export const createProgram = (data: Partial<Program>) => apiClient.post('/programs', data);
export const updateProgram = (id: string, data: Partial<Program>) => apiClient.put(`/programs/${id}`, data);
export const deleteProgram = (id: string) => apiClient.delete(`/programs/${id}`); 