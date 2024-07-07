// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    error: null,
    registerOrLogin: (authToken) => {
      set({
        user: {
          id: '1',
          username: 'test',
          email: 'test@gmail.com',
          auth: authToken,
        },
      });
    },
  }))
);

export default useAuthStore;
