import {  configureStore } from '@reduxjs/toolkit';



import main from './reducers/main';
import auth from './reducers/auth';
import checkKeyModal from './reducers/checkKeyModal';
import editDescriptionModal from './reducers/editDescriptionModal';
import userPage from './reducers/pages/user';
import editProfilePage from './reducers/pages/edit-profile';
import editUserInfoModal from './reducers/editUserInfoModal';
import uploadImageModal from './reducers/uploadImageModal';







const store = configureStore({
    reducer: {
        main,
        auth,
        checkKeyModal,
        editDescriptionModal,
        userPage,
        editProfilePage,
        editUserInfoModal,
        uploadImageModal
	},
});

export default store;



