import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/userSlice";
import ActivityReducer from "../features/activity/activitySlice";

export const store = configureStore({
  reducer: {
    userState: UserReducer,
    activity: ActivityReducer,
  },
});
