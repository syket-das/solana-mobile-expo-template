// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const URL = 'http://16.171.181.210:3000';

const useReferralStore = create(
  devtools((set) => ({
    referral: null,
    error: null,
    createReferral: async (userId, code) => {
      try {
        const { data } = await axios.post(`${URL}/api/v1/referrals`, {
          userId,
          referCode: code,
        });

        set({ referral: data.data, error: null });
      } catch (error) {
        set({
          error: error.response.data.error || error.message,
          referral: null,
        });
      }
    },
  }))
);

export default useReferralStore;
