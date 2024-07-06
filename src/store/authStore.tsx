// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const URL = 'http://16.171.181.210:3000';

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    error: null,
    registerOrLogin: async (authToken) => {
      try {
        const { data } = await axios.post(`${URL}/api/v1/users`, {
          authToken,
          address: authToken.address,
        });

        console.log(data);

        set({ user: data.data });
      } catch (error) {
        set({
          error: error.response.data.error || error.message,
          user: null,
        });
        console.log(error);
      }
    },
  }))
);

export default useAuthStore;
