import { createSlice } from "@reduxjs/toolkit";
import { userBookingsDummyData } from "../../assets/assets";

export const userBookedData = createSlice({
  name: "userBookedData",
  initialState: {
    userData: userBookingsDummyData,
    dashboardData: {
      totalBookings: userBookingsDummyData.length,
      totalRevenue: userBookingsDummyData.reduce((total, userdata) => {
        return total + userdata.totalPrice;
      }, 0),
      bookings: userBookingsDummyData,
    },
  },
  reducers: {
    bookRoom: (state, action) => {
      state.userData.push(action.payload);
      state.dashboardData.totalBookings = state.userData.length;
      state.dashboardData.totalRevenue = state.userData.reduce(
        (total, userdata) => {
          return total + userdata.totalPrice;
        },
        0,
      );
      state.dashboardData.bookings = state.userData;
    },
    editUserStatus: (state, action) => {
      const { id, paid }=action.payload;
      let specifiedUser = state.userData.find((user)=> user._id === id)
      specifiedUser.isPaid = paid;
      state.dashboardData.bookings = state.userData;
    },
  },
});

export const { bookRoom, editUserStatus } = userBookedData.actions;
export default userBookedData.reducer;
