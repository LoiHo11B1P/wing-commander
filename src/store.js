import {  configureStore } from '@reduxjs/toolkit'
import timeKeeperReducer from './features/timeKeeperSlice'
import quoteReducer from './features/quoteSlice'

export const store = configureStore({

    reducer: {
        quote: quoteReducer,
        timeKeeper: timeKeeperReducer
    }
})