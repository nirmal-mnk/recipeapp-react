import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const gettingAllData = createAsyncThunk(
  "recipe/gettingAllData",
  async (state, thunkApi) => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/search?app_id=7ce6def2&app_key=0ee77d111f20b73f3bc2465a5cdd30e2&q=${state}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    allRecipe: [],
    isloading: false,
    isRejected: false,
    showResult: false,
  },
  reducers: {},
  extraReducers: {
    [gettingAllData.pending]: (state, action) => {
      state.isloading = true;
    },
    [gettingAllData.fulfilled]: (state, action) => {
      state.allRecipe = action.payload;
      state.isloading = false;
      state.showResult = true;
      state.isRejected = false;
      if (action.payload.hits.length === 0) {
        state.isRejected = true;
        state.showResult = false;
      }
    },
    [gettingAllData.rejected]: (state, action) => {
      state.isloading = false;
    },
  },
});

export const { getAllRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
