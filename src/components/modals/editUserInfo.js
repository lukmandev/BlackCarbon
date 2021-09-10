import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import EditProfileService from '../../services/edit-profile';
import Input from '../forms/input';
import {setActive} from '../../redux/reducers/editUserInfoModal';


const EditUserInfoModal = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			...allState.editUserInfoModal
		}
	});
	const { changeUserInfo } = EditProfileService();
	const values = useSelector(allState => {
		return {
			name: allState.auth.profile.name,
			position: allState.auth.profile.position,
		}
	});

	const outDifferents = (values, initialValues) => {
		let index = 0;
		const result = {}
		for(let i in values){
			for(let j in initialValues){
				if(j === i && values[i] !== initialValues[j]){
					if(values[i] === "" && initialValues[j] === null) {
						continue;
					}else{
						result[i] = values[i];
						index++;
					}
				}
			}
		}
		return {
			index,
			result
		}
	}

	const closeModal = () => {
		dispatch(setActive(false));
	}

	const outBtnState = (props) => {
		const {index} = outDifferents(props.values, props.initialValues);
		if(index){
			return "Сохранить";
		}
		return "Измените поле"
	}

	return (
		<div className={`user-biography-wrapper ${state.isActive ? "active": ""} fixed left-0 top-0 w-full h-full flex justify-center items-center`}>
		  <div className="user-biography-modal relative">
		  	<div className={`form-loading ${state.isLoading ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
			  	<i className="fas fa-spinner text-white" />
			  </div>
		    <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
		    <Formik
		    	initialValues={values}
		    	enableReinitialize
		    	onSubmit={(v) => {
		    		const { index, result } = outDifferents(v, values);
		    		if(index){
		    			changeUserInfo(result);
		    		}
		    	}}
		    >
		    	{(props) => (
		    		<form onSubmit={props.handleSubmit} className="biography-change-form grid grid-cols-1 justify-start">
				      <div className="form__item grid grid-cols-1">
				        <span className="text-white font-normal">Ваше имя</span>
				        <Input className="w-full text-white form__input" name="name" />
				      </div>
				      <div className="form__item grid grid-cols-1">
				        <span className="text-white font-normal">Ваше Должность</span>
				        <Input className="w-full text-white form__input" name="position" />
				      </div>
				      <div className="modal__bottom">
				        <button type="submit" className="save-changes-btn text-white font-semibold">
				          {outBtnState(props)}
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


export default EditUserInfoModal;