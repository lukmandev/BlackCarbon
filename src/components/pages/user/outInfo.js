import {useSelector} from "react-redux";
import InfoField from "./infoField";


const OutInfo = () => {
    const state = useSelector(allState => {
        return {
            user: allState.userPage.user
        }
    });
    return (
        <>
            <InfoField icon="far fa-envelope" value={state.user.email} />
            <InfoField icon="fas fa-phone-volume" value={state.user.phone} />
            <InfoField icon="far fa-envelope" value={state.user.other_link} />
        </>
    );
}

export default OutInfo;