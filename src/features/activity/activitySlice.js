import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const GetActivities = createAsyncThunk(
  "activity/GetActivities",
  async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/activity");
      return res.data.data;
    } catch (error) {
      console.log(error?.response);
    }
  }
);
const activityAdapter = createEntityAdapter({
  selectId: (activity) => activity.id,
});
export const activitySlice = createSlice({
  name: "activity",
  initialState: activityAdapter.getInitialState({
    isLoading: true,
  }),
  extraReducers: (builder) => {
    builder.addCase(GetActivities.fulfilled, (state, action) => {
      activityAdapter.setAll(state, action.payload);
      //   state.isLoading = false;
    });
  },
});
export const ProductSelectors = activityAdapter.getSelectors(
  (state) => state.activity
);
export default activitySlice.reducer;
