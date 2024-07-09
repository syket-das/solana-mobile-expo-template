// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import useAuthStore from './authStore';

const URL = 'http://16.171.181.210:3000';

const useReferralStore = create(
  devtools((set) => ({
    referral: null,
    error: null,
    createReferral: async (code) => {
      try {
        const { data } = await axios.post(
          `${URL}/api/v1/referrals`,
          {
            referralCode: code,
          },
          {
            headers: {
              Authorization: `Bearer ${useAuthStore.getState().token}`,
            },
          }
        );

        set({ referral: data.data, error: null });
      } catch (error) {
        set({
          error: error.response.data.message || 'Something went wrong',
          referral: null,
        });
      }
    },
  }))
);

export default useReferralStore;
