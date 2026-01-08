import { http, HttpResponse } from 'msw';

import userData from '@/mocks/data/users.json';
import categoryData from '@/mocks/data/categories.json';

import type { Category } from '@/types/info';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(userData);
  }),

  http.get<Category>('/api/categories', () => {
    return HttpResponse.json(categoryData);
  }),
];
