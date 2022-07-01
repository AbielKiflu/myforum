import { createSlice } from '@reduxjs/toolkit'

const uiStateReducer = createSlice({
  name: 'uiState',
  initialState: {
    hamburger:localStorage.getItem("HamburgerStatus")||"true",
    logged:localStorage.getItem("LogStatus")||"false",

  },

  reducers: {
    changeHamburger(state, action) {
        state.hamburger=!state.hamburger;
        localStorage.setItem('HamburgerStatus', state.hamburger);
    },

    LoggedIn(state, action) {
      state.logged=action.payload;
      localStorage.setItem('LogStatus', state.logged);
  },
 
 
  }

});

export const { changeHamburger,LoggedIn } = uiStateReducer.actions
export default uiStateReducer.reducer
