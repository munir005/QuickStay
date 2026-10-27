import { configureStore } from "@reduxjs/toolkit";
import roomData from "./roomDataSlice/roomData";
import isFormOpen from "./isFormOpenSlice/isFormOpen";
import userBookedData from "./bookedDataSlice/bookedData";
import toastSlice from "./toasteSlice/toastSlice";

export const store = configureStore({
  reducer: {
    roomData: roomData,
    isFormOpen: isFormOpen,
    userBookedData: userBookedData,
    tost: toastSlice,
  },
});
