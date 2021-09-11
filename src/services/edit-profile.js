import {useDispatch, useSelector} from "react-redux";
import {setFieldsLoading, setMessage} from "../redux/reducers/pages/edit-profile";
import api from "../http/api";
import {setProfile, setProfileError} from "../redux/reducers/auth";
import {
    setLoading as setDescriptionLoading,
    setMessage as setDescriptionMessage
} from '../redux/reducers/editDescriptionModal';
import {
    setLoading as setUserInfoLoading,
    setMessage as setUserInfoMessage
} from '../redux/reducers/editUserInfoModal';
import {
    setLoading as setImageUpLoading,
    setMessage as setImageUpMessage
} from '../redux/reducers/uploadImageModal';
import {
    setLoading as setUserBgModalLoading,
    setMessage as setUserBgModalMessage
} from '../redux/reducers/editUserBgModal';


const contentType = 'multipart/form-data';


const EditProfileService = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState);

    const changeProfile = async (info) => {
        const { auth } = state;
        const result = {
            errors: {},
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }
        dispatch(setFieldsLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch (e) {
            if(e.response){
                if(e.response.status === 400){
                    result.errors = e.response.data;
                }else {
                    result.message = "Произошла какая то ошибка";
                }
            }else if(e.request){
                result.message = "Произошла какая то ошибка";
            }else{
                result.message = "Произошла какая то ошибка";
            }
            dispatch(setProfileError(true));
        } finally {
            dispatch(setMessage(result.message));
            dispatch(setFieldsLoading(false));
            return result.errors;
        }
    }
    const changeDescription = async (info) => {
        const { auth } = state;
        const result = {
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }

        dispatch(setDescriptionLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch(e) {
            result.message = "Произошла какая то ошибка";
        } finally {
            dispatch(setDescriptionMessage(result.message));
            dispatch(setDescriptionLoading(false));
        }
    }   
    const changeUserInfo = async (info) => {
        const { auth } = state;
        const result = {
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }
        dispatch(setUserInfoLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch(e) {
            result.message = "Произошла какая то ошибка";
        } finally {
            dispatch(setUserInfoMessage(result.message));
            dispatch(setUserInfoLoading(false));
        }
    }
    const changeUserAvatar = async (info) => {
        const { auth } = state;
        const result = {
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }
        dispatch(setImageUpLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch(e) {
            result.message = "Произошла какая то ошибка";
        } finally {
            dispatch(setImageUpMessage(result.message));
            dispatch(setImageUpLoading(false));   
        }
    }
    const changeUserBg = async (info) => {
        const { auth } = state;
        const result = {
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }
        dispatch(setUserBgModalLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch (e) {
            result.message = 'Произошла какая то ошибка';
        } finally {
            dispatch(setUserBgModalMessage(result.message));
            dispatch(setUserBgModalLoading(false));
        }
    }
    return {
        changeProfile,
        changeDescription,
        changeUserInfo,
        changeUserAvatar,
        changeUserBg
    }
}

export default EditProfileService;