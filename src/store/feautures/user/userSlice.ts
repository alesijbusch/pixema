import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "services";
import { AuthValue } from "types";
import { toast } from "react-toastify";

interface userState {
  name: null | string;
  email: string | null;
  isAuth?: boolean;
  token?: null;
  id?: null;
  loading?: boolean;
  error?: string | null;
}

export const fetchSignUpUser = createAsyncThunk<userState, AuthValue>(
  "user/fetchSignUpUser",
  async ({ email, password, name }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      await updateProfile(user, { displayName: name });
      return {
        name: user.displayName,
        email: user.email,
      };
    }
    throw new Error("User registration failed!");
  },
);
export const fetchSignInUser = createAsyncThunk<userState, AuthValue>(
  "user/fetchSignInUser",
  async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return {
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      throw error;
    }
  },
);

export const fetchLogout = createAsyncThunk("auth/logout", async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
});

const initialState: userState = {
  name: "",
  email: "",
  isAuth: false,
  token: null,
  id: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
      alert("вы успешно зарегистрировались");
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      alert("проверьте введенные данные");
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
      alert("вы успешно вошли");
    });
    builder.addCase(fetchSignInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      alert("проверьте введенные данные");
    });
    builder.addCase(fetchLogout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.isAuth = false;
      state.email = null;
      state.name = null;
      state.loading = false;
      alert("вы успешно вышли");
    });
    builder.addCase(fetchLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
