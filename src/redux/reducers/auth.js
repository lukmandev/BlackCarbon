import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
   	profileLoaded: false,
    profileHasError: false,
    isAuth: false,
    key: null,
    id: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setProfile(state, action){
        	state.profile = action.payload;
        },
        setKey(state, action){
        	state.key = action.payload;
        },
        setIsAuth(state, action){
            state.isAuth = action.payload;
        },
        setProfileLoaded(state, action){
        	state.profileLoaded = action.payload;
        },
        setProfileError(state, action){
            state.profileHasError = action.payload;
        },
        setId(state, action){
            state.id = action.payload;
        }
    },
})

export const {
    setProfile,
    setKey,
    setProfileLoaded,
    setIsAuth,
    setId,
    setProfileError
} = auth.actions
export default auth.reducer;