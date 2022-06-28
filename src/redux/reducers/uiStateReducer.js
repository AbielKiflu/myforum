import { createSlice } from '@reduxjs/toolkit'

const uiStateReducer = createSlice({
  name: 'uiState',
  initialState: {
    hamburger:true,
    logged:false,
  },

  reducers: {
    changeHamburger(state, action) {
        state.hamburger=!state.hamburger;
    },

    LoggedIn(state, action) {
      state.logged=action.payload;
 
  },
 
 
  }

});

export const { changeHamburger,LoggedIn } = uiStateReducer.actions
export default uiStateReducer.reducer
