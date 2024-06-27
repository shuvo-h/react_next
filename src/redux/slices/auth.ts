import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TUser = {
  name: string,
  email: string,
  id: number
}

interface TAuthState {
  user: TUser | null,
  flag:{
    isFetch: boolean,
    isEdit: boolean,
    isDelete: boolean,
  },
}


// Define the initial state using that type
const initialState: TAuthState = {
  user: null,
  flag:{
    isFetch: false,
    isEdit: false,
    isDelete: false,
  },
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) =>{
      state.user = action.payload;
    },
    setFlag: (state, action) => {
      const {flagName,value} = action.payload
      switch (flagName) {
        case 'fetch':
          state.flag.isFetch = value
          break;
        case 'edit':
          state.flag.isEdit = value
          break;
        case 'delete':
          state.flag.isDelete = value
          break;

        default:
          break;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setFlag, } = authSlice.actions

export default authSlice.reducer