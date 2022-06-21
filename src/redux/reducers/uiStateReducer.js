import { createSlice } from '@reduxjs/toolkit'

const uiStateSlice = createSlice({
  name: 'uiState',
  initialState: {
    hamburger:false
  },

  reducers: {
    changeHamburger(state, action) {
        state.hamburger=!state.hamburger;
    },
     
 
  }

});

export const { changeHamburger } = uiStateSlice.actions
export default uiStateSlice.reducer
