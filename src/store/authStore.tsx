// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const URL = 'http://16.171.181.210:3000';

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    error: null,
    token: null,
    registerOrLogin: async (authToken) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${URL}/api/v1/users`,
          data: {
            authToken,
            address: authToken.address,
          },
        });

        const { user, token } = data.data;

        set({
          user,
          token,
          error: null,
        });
      } catch (error) {
        set({
          error: error.response?.data?.message || 'Something went wrong',
          user: null,
          token: null,
        });
      }
    },
  }))
);

export default useAuthStore;
