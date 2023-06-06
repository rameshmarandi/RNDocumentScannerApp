import {createSlice} from '@reduxjs/toolkit';

const authState = {
  userDetails: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    resetAuth: state => {
      state.userDetails = {};
    },
    setUserDetails: (state, {payload}) => {
      state.userDetails = payload;
    },
  },
});

export const {resetAuth, setUserDetails} = AuthSlice.actions;

export default AuthSlice.reducer;
