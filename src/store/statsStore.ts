// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import useAuthStore from './authStore';

const URL = 'http://16.171.181.210:3000';

const useStatsStore = create(
  devtools((set) => ({
    stats: null,
    error: null,
    getStats: async () => {
      try {
        const { data } = await axios.get(`${URL}/api/v1/stats`, {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        });

        set({ stats: data.data, error: null });
      } catch (error) {
        set({
          error: error.response.data.message || 'Something went wrong',
          stats: null,
        });
      }
    },
  }))
);

export default useStatsStore;
