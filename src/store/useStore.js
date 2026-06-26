import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "",
        username: "",
        email: "",
        mobile: "",
      },

      categories: [],

      notes: "",

      setUser: (user) =>
        set({
          user,
        }),

      setCategories: (categories) =>
        set({
          categories,
        }),

      setNotes: (notes) =>
        set({
          notes,
        }),

      resetStore: () =>
        set({
          user: {
            name: "",
            username: "",
            email: "",
            mobile: "",
          },
          categories: [],
          notes: "",
        }),
    }),
    {
      name: "super-app-storage",
    }
  )
);