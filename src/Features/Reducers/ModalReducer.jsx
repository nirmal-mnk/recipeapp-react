import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
    viewRecipe: [],
  },
  reducers: {
    checkModal: (state) => {
      state.isModal = !state.isModal;
    },
    clickedRecipe: (state, action) => {
      state.viewRecipe = action.payload;
    },
  },
});

export const { checkModal, clickedRecipe } = ModalSlice.actions;

export default ModalSlice.reducer;
