import {createSlice } from "@reduxjs/toolkit";


const initialState = {
  csvData: null,
};

export const uploadSlice = createSlice({
  name: "CSV",
  initialState,
  reducers: {
    uploadCSV: (state, action) => {
      state.csvData = action.payload
    },
    removeCSV:(state)=>{
      state.csvData=null
    }
  },
});

export const { uploadCSV, removeCSV} = uploadSlice.actions;

export default uploadSlice.reducer;
