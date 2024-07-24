// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import useAuthStore from './authStore';

const URL = 'http://16.171.181.210:3000';

const useUserStore = create(
  devtools((set) => ({
    users: [],
    user: null,
    error: null,
    getUserProfile: async () => {
      try {
        const { data } = await axios.get(`${URL}/api/v1/users/profile`, {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        });

        set({ user: data.data, error: null });
      } catch (error) {
        set({
          error: error.response.data.message || 'Something went wrong',
          user: null,
        });
      }
    },

    getAllUsers: async () => {
      try {
        const { data } = await axios.get(`${URL}/api/v1/users/all`, {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        });

        set({ users: data.data, error: null });
      } catch (error) {
        set({
          error: error.response.data.message || 'Something went wrong',
          users: [],
        });
      }
    },
  }))
);

export default useUserStore;
