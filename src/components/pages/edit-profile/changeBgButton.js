import { useDispatch } from "react-redux";
import { setActive } from "../../../redux/reducers/editUserBgModal";



const ChangeBgButton = () => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setActive(true));
    }

    return (
        <div className="absolute right-0 top-0 z-3">
            <button onClick={openModal} className="text-white">
                Изменить Фото Стены
            </button>
        </div>
    )
}


export default ChangeBgButton;