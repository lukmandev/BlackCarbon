import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const nonUserBg = 'profile.jpg';

const UserBg = ({ userBg }) => {
    const [image, setImage] = useState(userBg ? userBg : require('../../assets/images/'+ nonUserBg +'').default);
    useEffect(() => {
        setImage(userBg);
    }, [userBg])
    const handleError = () => {
        setImage(require('../../assets/images/'+ nonUserBg +'').default);
    }
    return (
        <img 
            onError={handleError}
            src={image}
			className="user-bg object-cover absolute left-0 top-0 w-full"/>
    )
}

export default UserBg;