import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import EditProfileService from '../../services/edit-profile';
import { setActive, setMessage } from '../../redux/reducers/editUserBgModal';

const UserBgModal = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			...allState.editUserBgModal
		}
	});
	const { changeUserBg } = EditProfileService();
	const fileInput = useRef(null);
	const uploadImage = () => {
		if(fileInput.current.files.length){
			changeUserBg({user_bg: fileInput.current.files[0]});
		}	
	}

	const closeModal = () => {
		fileInput.current.value = "";
		dispatch(setMessage(""));
		dispatch(setActive(false));
	}

	return (
		<div className={`${state.isActive ? "active": ""} user-biography-wrapper fixed left-0 top-0 w-full h-full flex justify-center items-center`}>
			<div className="user-biography-modal relative">
				HELLO
				<div className={`form-loading ${state.isLoading ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
				  	<i className="fas fa-spinner text-white" />
				</div>
				<i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
				<input type="file" ref={fileInput} />
				<button className="p-3 bg-white" onClick={uploadImage}>Загрузить фотограцию</button>
				{state.message && <div className="text-white">{state.message}</div>}
			</div>
		</div>
	)
}


export default UserBgModal;