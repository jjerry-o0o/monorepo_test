import { http, HttpResponse } from 'msw';

import userData from '@/mocks/data/users.json';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(userData);
  }),
];
