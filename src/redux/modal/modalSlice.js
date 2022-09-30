import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    handleModal: {
      reducer: (state) => {
        state.isModalOpen = !state.isModalOpen;
      },
    },
  },
});

export const { handleModal } = modalSlice.actions;
export default modalSlice.reducer;
