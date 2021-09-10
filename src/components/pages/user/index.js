import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import Loading from './loading';
import NotFound from './notFound';
import CheckKeyModal from '../../modals/checkKey';
import {userById} from "../../../redux/thunks/main";
import {setActive} from '../../../redux/reducers/checkKeyModal';
import OutInfo from "./outInfo";
import UserInfo from "./userInfo";
import UserDescription from "./userDescription";
import UserSocials from "./userSocials";


const UserPageWrapper = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			user: allState.userPage.user,
			userLoaded: allState.userPage.userLoaded,
			responseError: allState.userPage.responseError,
			userNotFound: allState.userPage.userNotFound,
		}
	});
	const { id } = useParams();

	useEffect(() => {
		dispatch(userById(id));
	}, []);

	const openModal = () => {
		dispatch(setActive(true));
	}

	const outInfo = () => {
		if(state.userLoaded){
			if(state.responseError){
				return <h1>ПРОИЗОШЛА КАКАЯ ТО ОШИБКА</h1>
			}
			if(state.userNotFound){
				return <NotFound />
			}
			return (
				<>
					<div className="profile w-full">
						<img src="assets/images/user-bg.jpg" alt="" className="user-bg object-cover absolute left-0 top-0 w-full" />
						<div className="wrapper">
							<div className="profile-holder">
								<UserInfo />
								<div className="profile__form w-full grid grid-col-1">
									<UserDescription />
									<CheckKeyModal />
									<OutInfo />
									<UserSocials />
									<div className="profile__bottom flex justify-center items-center grid grid-col-1">
                                          <span onClick={openModal} className="font-light cursor-pointer profile__bottom-text flex justify-center">
                                            Its your account?
                                          </span>
										<button className="user-connect-btn flex justify-center items-center w-full text-white">
											Connect
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)
		}
		return <Loading />

	}
	return (
		<>
			{outInfo()}
		</>
	)
}


export default UserPageWrapper;