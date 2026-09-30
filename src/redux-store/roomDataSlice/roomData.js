import { createSlice } from "@reduxjs/toolkit";
import { roomsDummyData } from "../../assets/assets";
const initialState = {
  roomsData: roomsDummyData,
};

export const roomData = createSlice({
  name: "roomData",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomsData.push(action.payload);
    },
  },
});

export const { addRoom } = roomData.actions;
export default roomData.reducer;
