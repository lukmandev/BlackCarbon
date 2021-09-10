import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fieldsLoading: false,
    message: ""
}

const editProfile = createSlice({
    name: 'editProfile',
    initialState,
    reducers: {
        setFieldsLoading(state, action){
            state.fieldsLoading = action.payload;
        },
        setMessage(state, action){
            state.message = action.payload;
        }
    },
})

export const {
    setFieldsLoading,
    setMessage
} = editProfile.actions
export default editProfile.reducer;