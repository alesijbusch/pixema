import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services";
import { AuthValue } from "types";

interface userState {
  email: string | null;
  creationTime: string | undefined;
  token?: null;
  id?: null;
}

export const fetchSignUpUser = createAsyncThunk<userState, AuthValue>(
  "user/fetchSignUpUser",
  async ({ email, password }) => {
    // try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return {
      email: user.email,
      creationTime: user.metadata.creationTime,
    };
    // } catch (error) {}
  },
);

const initialState = {} as userState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {});
  },
});

export default userSlice.reducer;
