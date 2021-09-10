import { useSelector, useDispatch } from 'react-redux';


import Image from '../image';
import { setActive } from '../../../redux/reducers/uploadImageModal';

const UserImage = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			avatar: allState.auth.profile.avatar
		}
	});

	const openModal = () => {
		dispatch(setActive(true));
	}

	return (
		<div className="w-full p-100 relative">
			<button onClick={openModal} className="z-3 bg-white text-black absolute right-0 top-0">
				EDIT
			</button>
			<div className="profile__img absolute left-0 top-0 w-full h-full">
				<Image src={state.avatar} className="object-cover w-full h-full" />
			</div>
		</div>
	)
}


export default UserImage;