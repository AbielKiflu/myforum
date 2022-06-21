import {configureStore} from '@reduxjs/toolkit';
import uiStateReducer from "./reducers/uiStateReducer";

export  const store = configureStore(
    {reducer:{
        uiState:uiStateReducer,
    }});