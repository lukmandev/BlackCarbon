import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import editDescriptionModal from "../../redux/reducers/editDescriptionModal";
import TextArea from '../forms/textarea';
import { setActive, setMessage } from '../../redux/reducers/editDescriptionModal';
import EditProfileService from '../../services/edit-profile';

const EditDescription = () => {
	const dispatch = useDispatch();
	const state = useSelector((allState) => {
		return {
			isActive: allState.editDescriptionModal.isActive,
			isLoading: allState.editDescriptionModal.isLoading,
		    message: allState.editDescriptionModal.message,
		    profile: allState.auth.profile
		}
	});

	const { changeDescription } = EditProfileService();


	const closeModal = () => {
		dispatch(setMessage(""));
		dispatch(setActive(false));
	}

	const outBtnText = (props) => {
		if(props.values.description === props.initialValues.description){
			return "Измените текст";
		}
		return "Сохранить";
	}

	return (
		<div className={`${state.isActive ? "active": ""} user-biography-wrapper fixed left-0 top-0 w-full h-full flex justify-center items-center`}>
		  <div className="user-biography-modal relative">
		  	<div className={`form-loading ${state.isLoading ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
			  	<i className="fas fa-spinner text-white" />
			  </div>
		    <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
		    <Formik
		    	initialValues={{
		    		description: state.profile.description
		    	}}
		    	enableReinitialize
		    	onSubmit={(values) => {
		    		if(values.description !== state.profile.description){
		    			changeDescription(values);
		    		}
		    	}}
		    >
		    	{(props) => (
		    		<form onSubmit={props.handleSubmit} className="biography-change-form grid grid-cols-1 justify-start">
		    			<TextArea className="biography-text resize-none text-white" placeholder="Напишите о себе" name="description" />
				      	<div className="modal__bottom">
				        	<button type="submit" className="save-changes-btn text-white font-semibold">
				          		{outBtnText(props)}
				        	</button>
				        	{state.message && <div className="text-white">{state.message}</div>}
				      	</div>
				    </form>
		    	)}
		    </Formik>
		  </div>
		</div>
	)
}

export default EditDescription;
