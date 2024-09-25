import { createSlice } from "@reduxjs/toolkit";

type UserType = {
    _id?: string;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    otp?: string;
}


type InitialStateType = {
    currentUser: UserType | null;
    loading: boolean;
    error: boolean;
}

const initialState: InitialStateType = {
    currentUser: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      signInSuccess: (state: any,action: any)=>{
        state.currentUser = action.payload
      }
    }
})


export const { signInSuccess } = userSlice.actions;

export default userSlice.reducer;