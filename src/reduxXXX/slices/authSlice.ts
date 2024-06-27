import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
type TUser = {
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

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload
    },
    setFlag: (state, action) => {
        switch (action.payload.type) {
            case "fetch":
                state.flag.isFetch = action.payload.value
                break;
            case "edit":
                state.flag.isEdit = action.payload.value
                break;
            case "delete":
                state.flag.isDelete = action.payload.value
                break;
            default:
                break;
        }
    },
  },
})

export const { setUser, setFlag, } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default AuthSlice.reducer