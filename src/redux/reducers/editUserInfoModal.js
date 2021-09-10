import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    isLoading: false,
    message: ""
}

const editUserInfoModal = createSlice({
    name: 'editUserInfoModal',
    initialState,
    reducers: {
        setActive(state, action){
        	state.isActive = action.payload;
        },
        setLoading(state, action){
        	state.isLoading = action.payload;
        },
        setMessage(state, action){
        	state.message = action.payload;
        }
    },
})

export const {
    setActive,
    setLoading,
    setMessage
} = editUserInfoModal.actions
export default editUserInfoModal.reducer;