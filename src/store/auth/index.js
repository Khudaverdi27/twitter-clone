import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    name: "Solbek💥",
    username: "gencfenerli907",
    avatar:
      "https://pbs.twimg.com/profile_images/1525152482648899585/cWsgIGig_normal.jpg",
  },
  accounts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter((a) => a.id !== action.payload);
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = null;
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } =
  authSlice.actions;

export default authSlice.reducer;
