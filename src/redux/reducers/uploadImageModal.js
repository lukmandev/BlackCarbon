import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    isLoading: false,
    message: "",
}

const uploadImageModal = createSlice({
    name: 'uploadImageModal',
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
        },
    },
})

export const {
    setActive,
    setLoading,
    setMessage
} = uploadImageModal.actions
export default uploadImageModal.reducer;