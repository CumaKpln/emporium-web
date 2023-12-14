import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUserIndex: -1,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUserIndex = state.users.length - 1;
    },
    logIn: (state, action) => {
      const { email, password } = action.payload;
      const userIndex = state.users.findIndex((user) => user.email === email && user.password === password);
      if (userIndex !== -1) {
        state.currentUserIndex = userIndex;
      }
    },
    logOut: (state) => {
      state.currentUserIndex = -1;
    },
    update: (state, action) => {
      if (state.currentUserIndex !== -1) {
        state.users[state.currentUserIndex] = { ...state.users[state.currentUserIndex], ...action.payload };
      }
    },
  },
});

export const { addUser, logIn, logOut, update } = userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const getCurrentUser = (state) => {
  if (state.user.currentUserIndex !== -1) {
    return state.user.users[state.user.currentUserIndex];
  }
  return null;
};

export default userSlice.reducer;
