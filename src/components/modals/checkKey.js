import { useDispatch, useSelector } from 'react-redux';
import {setActive} from "../../redux/reducers/checkKeyModal";
import {Formik} from "formik";
import {checkKey} from "../../redux/thunks/main";
import {useParams} from "react-router-dom";
import Input from "../forms/input";



const CheckKeyModal = () => {
	const dispatch = useDispatch();
	const state = useSelector(({checkKeyModal}) => checkKeyModal);
	const {id} = useParams();

	const closeModal = () => {
		dispatch(setActive(false));
	}
	return (
		<div className={`${state.isActive ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
		  <div className="checkKey-modal relative">
			  <div className={`form-loading ${state.isLoading ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
			  	<i className="fas fa-spinner text-white" />
			  </div>
		    <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
			<Formik
				initialValues={{
					key: ""
				}}
				onSubmit={(values, actions) => {
					dispatch(checkKey({id: id, key: values.key}));
					actions.setSubmitting(false);
				}}
			>
				{({handleSubmit}) => (
					<form onSubmit={handleSubmit} className="checkKey__form grid grid-cols-1 justify-center">
						<Input className="text-white" placeholder="Введите ключ" name="key"/>
						{state.message && <div className="text-white">{state.message}</div>}
						<button type="submit" className="flex justify-center items-center text-white">
							Check
						</button>
					</form>
				)}
			</Formik>
		  </div>
		</div>
	)
}


export default CheckKeyModal;