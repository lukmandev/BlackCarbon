import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, setUserLoaded, setError, setNotFound } from "../reducers/pages/user";
import api from "../../http/api";
import {setIsAuth, setKey, setId, setProfileError, setProfile, setProfileLoaded} from "../reducers/auth";
import {setLoading, setMessage} from "../reducers/checkKeyModal";
import {setFieldsChanging} from "../reducers/pages/edit-profile";


export const userById = createAsyncThunk(
    'user/get-by-id',
    async (id, {dispatch}) => {
        dispatch(setUserLoaded(false));
        const result = {
            notFound: false,
            hasError: false
        }
        try {
            const { data } = await api.get(`/users/${id}/`);
            dispatch(setUser(data));
        }catch (e) {
            if(e.response){
                if(e.response.status === 404){
                    result.notFound = true;
                }else {
                    result.hasError = true;
                }
            }else if(e.request){
                result.hasError = true;
            }else{
                result.hasError = true;
            }
        } finally {
            dispatch(setNotFound(result.notFound));
            dispatch(setError(result.hasError));
            dispatch(setUserLoaded(true));
        }
    }
)

export const checkKey = createAsyncThunk(
    'user/key',
    async (info, {dispatch}) => {
        const result = {
            message: ""
        }
        dispatch(setProfileLoaded(false));
        const formData = new FormData();
        formData.append('key', info.key);
        dispatch(setLoading(true));
        try{
            dispatch(setIsAuth(false));
            dispatch(setId(null));
            const { data } = await api({
                url: `/users/${info.id}/`,
                method: 'post',
                headers: { "Content-Type": "application/x-www-form-urlencoded"},
                data: formData,
            });
            dispatch(setKey(info.key));
            dispatch(setId(info.id));
            dispatch(setIsAuth(true));
        }catch (e){
            result.message = 'Такого ключа нету';
            dispatch(setKey(null));
            dispatch(setIsAuth(false));
        } finally {
            dispatch(setMessage(result.message));
            dispatch(setLoading(false));
        }
    }
)

export const fetchProfile = createAsyncThunk(
    'user/profile',
    async (id, {dispatch}) => {
        const result = {
            hasError: false,
        }
        dispatch(setProfileLoaded(false));
        try {
            const { data } = await api.get(`/users/${id}/`);
            result.hasError = false;
            dispatch(setProfile(data));
        } catch (e) {
            result.hasError = true;
        } finally {
            dispatch(setProfileError(result.hasError));
            dispatch(setProfileLoaded(true));
        }
    }
)


