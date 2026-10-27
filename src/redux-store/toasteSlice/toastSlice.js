import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",

  initialState: {
    toasts: [],
  },

  reducers: {
    showToast: (state, action) => {
      state.toasts.push({
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type || "success",
      });
    },

    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;