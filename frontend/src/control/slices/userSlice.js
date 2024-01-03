import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
    currentUserIndex: -1,
    token: {}, // Token'i boş bir string veya null olarak başlatın
  },
  reducers: {
    logIn: (state, action) => {
      const { email, password } = action.payload;
      const userIndex = state.users.findIndex((user) => user.email === email && user.password === password);
      if (userIndex !== -1) {
        state.currentUserIndex = userIndex;
        state.token = 'generate_token_here'; // Burada gerçek bir token oluşturulmalıdır
      }
    },
    logOut: (state) => {
      state.currentUserIndex = -1;
      state.token = null; // Çıkış yapıldığında token'i sıfırlayın
    },
  },
});


// export const selectUsers = (state) => state.user.users;
export const getCurrentUser = (state) => {
  if (state.user.currentUserIndex !== -1) {
    return state.user.users[state.user.currentUserIndex];
  }
  return null;
};

export const userReducer= userSlice.reducer;
export const { logIn, logOut } = userSlice.reducer;
