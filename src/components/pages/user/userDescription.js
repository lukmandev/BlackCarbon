import {useSelector} from "react-redux";


const UserDescription = () => {
    const state = useSelector(allState => {
        return {
            user: allState.userPage.user
        }
    })
    const outDescription = () => {
        if(state.user.description){
            return <div className="user-biography w-full grid items-center">
                <p className="text-white">{state.user.description}</p>
            </div>
        }
        return <div className="w-full grid grid-cols-1 items-center justify-start">
            <p className="user-biography-empty font-normal text-white">Пользователь не написал ничего о себе</p>
        </div>
    }
    return outDescription();
}

export default UserDescription;