import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice"
import authSlice from "./slices/auth"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


/*
step 1: install the redux with toolkit
step 2: create redux/store.ts
step 3: create the provider and give it to our root layout
step 4: create slice and add the slice to store
step 5:

*/