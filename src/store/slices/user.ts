import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserLoginForm } from '@app-types/user';

interface IUserState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
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
  },
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;
