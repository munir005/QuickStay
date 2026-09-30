import { createSlice } from "@reduxjs/toolkit";


export const isFormOpen = createSlice({
    name:"isFormOpen",
    initialState:{
        value: false,
        room: {},
        dataEdit:{
            checkIn: "",
            checkOut: "",
        }
    },
    reducers:{
        openForm:(state, actions)=>{
            state.value = true;
            state.room = actions.payload;
        },
        closeForm:(state)=>{
            state.value= false;
            state.room = {};
        },
        dataEdit:(state, actions)=>{
            const{checkInDate, checkOutDate} = actions.payload;
            if(checkInDate){
                state.dataEdit.checkIn = checkInDate;
            }
            if(checkOutDate){
                state.dataEdit.checkOut = checkOutDate;
            }
        },
    }
})

export const{openForm, closeForm, dataEdit}=isFormOpen.actions
export default isFormOpen.reducer