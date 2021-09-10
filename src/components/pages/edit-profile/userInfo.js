import {useSelector, useDispatch} from "react-redux";


import {setActive} from '../../../redux/reducers/editUserInfoModal';


const UserInfo = () => {
    const dispatch = useDispatch();
	const state = useSelector(allState => {
        return {
            profile: allState.auth.profile
        }
    })

	const outUserInfo = () => {
        const result = {
            name: "",
            position: "",
            nameClasses: "",
            positionClasses: ""
        }
        if(state.profile.name) {
            result.name = state.profile.name;
        }else{
            result.nameClasses = "text-yellow-500";
            result.name = 'Пользователь не написал свое имя';
        }
        if(state.profile.position){
            result.position = state.profile.position;
        }else{
            result.positionClasses = "text-yellow-500";
            result.position = "Пользователь не написал свою должность";
        }
        return (
            <div className="profile__user-info flex flex-col items-start justify-start">
                <span className={`${result.positionClasses} user-name text-white font-bold`}>
				    {result.name}
                </span>
                <span className={`${result.positionClasses} user-position text-white font-normal`}>
				    {result.position}
                </span>
            </div>
        )
    }

    const openModal = () => {
        dispatch(setActive(true));
    }
	return (
		<>
			{outUserInfo()}
			<button onClick={openModal} className="edit-user-info absolute text-white right-0 bottom-0">
				Изменить
			</button>
		</>
	)
}

export default UserInfo;