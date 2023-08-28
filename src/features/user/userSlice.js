import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// login
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        data
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.error);
    }
  }
);

// current
export const currentUser = createAsyncThunk(
  "user/currentUser",
  async (_, thunkAPI) => {
    const { userState } = thunkAPI.getState();
    console.log(userState);
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/users/current",
        {
          headers: {
            Accept: "*/*",
            "X-API-TOKEN": userState.token,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.log(error?.response);
      return thunkAPI.rejectWithValue(error?.response?.data?.error);
    }
  }
);

// logout
export const userLogout = createAsyncThunk(
  "user/userLogout",
  async (_, thunkAPI) => {
    const { userState } = thunkAPI.getState();

    try {
      const res = await axios.delete(
        "http://localhost:8080/api/v1/auth/logout",
        {
          headers: {
            Accept: "*/*",
            "X-API-TOKEN": userState.token,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error?.response);
      return thunkAPI.rejectWithValue(error?.response?.data?.error);
    }
  }
);
const getUserToken = () => {
  return JSON.parse(localStorage.getItem("token")) || null;
};

const initialState = {
  token: getUserToken(),
  user: null,
  isLoading: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // login
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { token } = action.payload.data;
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem("token", JSON.stringify(token));
        state.token = token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get current user
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        console.log(action);
        const user = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = user;
      })
      // logout
      .addCase(userLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        console.log(action, state);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload.data;
        localStorage.removeItem("token");
        state.token = null;
        toast.success("Success logout");
      })
      .addCase(userLogout.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default userSlice.reducer;
