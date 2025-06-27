# API Layer Documentation

This folder contains all API-related code for the Smart Campus application, organized using TanStack Query for state management and caching.

## Folder Structure

```
src/api/
├── config/
│   └── axios.ts          # Axios configuration with interceptors
├── hooks/
│   ├── useAuth.ts        # Custom hooks for authentication
│   └── useEvents.ts      # Custom hooks for events
├── services/
│   ├── authService.ts    # API service functions
│   └── eventService.ts   # Events API service functions
├── types/
│   ├── auth.ts          # TypeScript interfaces for auth
│   └── events.ts        # TypeScript interfaces for events
├── index.ts             # Barrel exports
└── README.md           # This file
```

## Features

- **TanStack Query Integration**: Automatic caching, background refetching, and optimistic updates
- **TypeScript Support**: Full type safety for API requests and responses
- **Error Handling**: Centralized error handling with automatic retry logic
- **Authentication**: Automatic token management and 401 error handling
- **DevTools**: React Query DevTools for debugging

## Usage

### Authentication Hooks

```typescript
import { useLogin, useLogout, useUser } from '../api/hooks/useAuth';

// Login
const loginMutation = useLogin();
const handleLogin = async (credentials) => {
  const result = await loginMutation.mutateAsync(credentials);
  if (result.success) {
    // Navigate to dashboard
  }
};

// Get current user
const { data: user, isLoading, error } = useUser();

// Logout
const logoutMutation = useLogout();
const handleLogout = () => logoutMutation.mutate();
```

### Events Hooks

```typescript
import { useEvents, useCreateEvent, useJoinEvent } from '../api/hooks/useEvents';

// Get all events
const { data: events, isLoading, error } = useEvents();

// Create new event
const createEventMutation = useCreateEvent();
const handleCreateEvent = async (eventData) => {
  const result = await createEventMutation.mutateAsync(eventData);
  if (result.success) {
    // Event created successfully
  }
};

// Join event
const joinEventMutation = useJoinEvent();
const handleJoinEvent = async (eventId) => {
  await joinEventMutation.mutateAsync(eventId);
};
```

### API Services

```typescript
import { authService, eventService } from '../api/services';

// Direct service calls
const result = await authService.login({ email, password });
const events = await eventService.getEvents();
```

## Configuration

The API base URL is configured in `config/axios.ts`. Update the `API_BASE_URL` constant to match your backend:

```typescript
const API_BASE_URL = 'http://localhost:5001/api/v1';
```

## Adding New APIs

1. **Add Types**: Create interfaces in `types/` folder
2. **Add Service**: Create service functions in `services/` folder
3. **Add Hooks**: Create custom hooks in `hooks/` folder
4. **Export**: Add exports to `index.ts`

Example for a new "notices" API:

```typescript
// types/notices.ts
export interface Notice {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
}

// services/noticeService.ts
export const noticeService = {
  async getNotices(): Promise<Notice[]> {
    const response = await apiClient.get('/notices');
    return response.data;
  }
};

// hooks/useNotices.ts
export const useNotices = () => {
  return useQuery({
    queryKey: ['notices'],
    queryFn: noticeService.getNotices,
  });
};
```

## Example Component

See `src/components/Events/EventsList.tsx` for a complete example of how to use the API hooks in a React component.

## Error Handling

The API layer includes automatic error handling:

- **401 Errors**: Automatically clear auth data and redirect to login
- **Retry Logic**: Automatic retries for failed requests (except 401)
- **Error Boundaries**: Graceful error handling in components

## Caching Strategy

- **Stale Time**: 5 minutes for most queries
- **Cache Time**: Default React Query settings
- **Background Refetching**: Enabled for better UX
- **Optimistic Updates**: For mutations where appropriate

## Available APIs

### Authentication
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile
- `POST /auth/refresh` - Refresh access token

### Events
- `GET /events` - Get all events
- `GET /events/:id` - Get specific event
- `POST /events` - Create new event
- `PUT /events/:id` - Update event
- `DELETE /events/:id` - Delete event
- `POST /events/:id/join` - Join event
- `POST /events/:id/leave` - Leave event 