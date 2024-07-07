// @ts-nocheck
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { debounce } from 'lodash'; // Import debounce from lodash

const useHomeStore = create(
  devtools((set) => ({
    id: '',
    points: 0,
    maxLifeline: 2000,
    lifeline: 2000,
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
  }))
);

export default useHomeStore;
