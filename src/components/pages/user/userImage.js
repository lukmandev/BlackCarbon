import { useSelector } from 'react-redux';


import Image from '../image';
import { setActive } from '../../../redux/reducers/uploadImageModal';

const UserImage = () => {
	const state = useSelector(allState => {
		return {
			avatar: allState.userPage.user.avatar
		}
	});

	return (
		<div className="w-full p-100 relative">
			<div className="profile__img absolute left-0 top-0 w-full h-full">
				<Image src={state.avatar} className="object-cover w-full h-full" />
			</div>
		</div>
	)
}


export default UserImage;