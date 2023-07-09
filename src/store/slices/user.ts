import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ACCESS_TOKEN_KEY,
  IUser,
  IUserLoginForm,
  IUserSignUpForm,
} from '@app-types/user';
import storage from '@services/storage';

interface IUserState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
  registerStatus?: 'idle' | 'success' | 'failed';
}

const initialState: IUserState = {
  token: '',
  user: {
    email: '',
    firstName: '',
    lastName: '',
    balance: 0,
    totalPortfolio: 0,
    portfolioRatio: 0,
  },
  isLoggedIn: false,
};

export const tryUserLogin = createAsyncThunk<IUser | null, IUserLoginForm>(
  'user/tryUserLogin',
  async ({ email }, { rejectWithValue }) => {
    // Here we would try to login the user by POSTing our API

    try {
      await storage.set(ACCESS_TOKEN_KEY, 'dummy_token');

      return {
        email,
        firstName: 'John',
        lastName: 'Doe',
        balance: 161100,
        totalPortfolio: 517770,
        portfolioRatio: 0.2305,
      };
    } catch (e) {
      console.error('Error while cacheing user token: ', e);
      // TODO: Properly handle and display error
      // return rejectWithValue(e);
    }

    return null;
  },
);

export const userLogout = createAsyncThunk<void, void>(
  'user/userLogout',
  async () => {
    try {
      await storage.remove(ACCESS_TOKEN_KEY);
    } catch (e) {
      console.error('Error while removing user token: ', e);
    }
  },
);

export const tryUserSignUp = createAsyncThunk<void, IUserSignUpForm>(
  'user/tryUserSignUp',
  async (userData, { rejectWithValue }) => {
    // Here we would try to sign up the user by POSTing our API
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUserLoginForm>) => {
      const { email } = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        user: {
          email,
          firstName: 'John',
          lastName: 'Doe',
          balance: 161100,
          totalPortfolio: 517770,
          portfolioRatio: 0.2305,
        },
      };
    },
    setSignUpStatus: (
      state,
      action: PayloadAction<'idle' | 'success' | 'failed'>,
    ) => ({
      ...state,
      registerStatus: action.payload,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(tryUserLogin.fulfilled, (state, action) => {
        if (!action.payload) {
          return state;
        }

        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      })
      .addCase(userLogout.fulfilled, state => ({
        ...state,
        isLoggedIn: false,
        user: initialState.user,
      }))
      .addCase(tryUserSignUp.fulfilled, state => ({
        ...state,
        registerStatus: 'success',
      }));
  },
});

export const { logIn, setSignUpStatus } = userSlice.actions;

export default userSlice.reducer;
