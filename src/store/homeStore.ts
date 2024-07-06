// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { debounce } from 'lodash'; // Import debounce from lodash

const URL = 'http://16.171.181.210:3000';

// Zustand store for managing home state
const useHomeStore = create(
  devtools((set) => ({
    id: '',
    points: 0,
    maxLifeline: 200,
    lifeline: 200,
    decreaseAmount: 2,
    increaseAmount: 2,
    regenInterval: 1000,
    mode: 'game',
    setPoints: (points: number) => {
      set({ points });
    },
    setLifeline: (lifeline: number) => {
      set({ lifeline });
    },
    setModeToBoss: () => {
      set({
        mode: 'boss',
        maxLifeline: Infinity,
        lifeline: Infinity,
        decreaseAmount: 0,
        increaseAmount: 0,
      });
    },
    setModeToGame: () => {
      set({
        mode: 'game',
        maxLifeline: 200,
        lifeline: 200,
        decreaseAmount: 2,
        increaseAmount: 2,
      });
    },
    increasePoints: () =>
      set((state) => {
        if (state.lifeline > 0) {
          const newPoints = state.points + 1;
          return { points: newPoints };
        }
        return state;
      }),
    decreaseLifeline: () =>
      set((state) => {
        const newLifeline = Math.max(state.lifeline - state.decreaseAmount, 0);
        return { lifeline: newLifeline };
      }),

    increaseLifeline: () =>
      set((state) => {
        const newLifeline = Math.min(
          state.lifeline + state.increaseAmount,
          state.maxLifeline
        );
        return { lifeline: newLifeline };
      }),
    startLifelineRegen: () => {
      const interval = setInterval(() => {
        set((state) => {
          const newLifeline = Math.min(
            state.lifeline + state.increaseAmount,
            state.maxLifeline
          );
          return { lifeline: newLifeline };
        });
      }, 1000);
      set({ regenInterval: interval });
    },

    stopLifelineRegen: () => {
      set((state) => {
        clearInterval(state.regenInterval);
        return { regenInterval: null };
      });
    },
    fetchPointsFromServer: async (userId) => {
      try {
        const response = await axios.get(`${URL}/api/v1/points/${userId}`);
        const pointsData = response.data.data;
        set({
          id: pointsData.id,
          points: pointsData.points,
          maxLifeline: pointsData.maxLifeline,
          decreaseAmount: pointsData.decreaseAmount,
          increaseAmount: pointsData.increaseAmount,
          regenInterval: pointsData.regenInterval,
        });
      } catch (error) {
        console.error('Failed to fetch points from server', error);
      }
    },
    updatePointsOnServer: debounce(async (pointsData) => {
      try {
        await axios.put(`${URL}/api/v1/points`, {
          id: pointsData.id,
          points: pointsData.points,
        });
        console.log('Points updated to server');
      } catch (error) {
        console.error('Failed to update points to server', error);
      }
    }, 1000), // Debounce time set to 1000ms (1 second)
  }))
);

export default useHomeStore;
