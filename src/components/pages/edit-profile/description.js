import {useDispatch, useSelector} from 'react-redux'; 
import {
	setActive,
} from '../../../redux/reducers/editDescriptionModal';



const Description = () => {
	const dispatch = useDispatch();
	const description = useSelector(({auth}) => auth.profile.description);


	const openModal = () => {
		dispatch(setActive(true));
	}
	const outUserDescription = () => {
		if(description){
			return <div className="w-full grid grid-cols-1 items-center justify-start">
		        <p className="user-biography text-white font-normal">{description}</p>
		        <button className="edit-biography text-white" onClick={openModal}>Редактировать</button>
		    </div>
		}
		return <div className="w-full grid grid-cols-1 items-center justify-start">
		          <p className="user-biography-empty font-normal text-white">Вы ничего не написали о себе</p>
		          <button className="edit-biography text-white" onClick={openModal}>Написать о себе</button>
		        </div>
	}

	return (
		<>
			{outUserDescription()}
		</>
	)
}

export default Description;