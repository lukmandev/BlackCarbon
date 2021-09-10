import { useState } from 'react';

const Image = ({src, ...props}) => {
	const [imageSrc, setSrc] = useState(src ? src : require('../../assets/images/profile.jpg').default);

	const errorHandler = () => {
		setSrc(require('../../assets/images/profile.jpg').default);
	}
	return (
		<img onError={errorHandler} src={imageSrc} {...props} />
	)
}

export default Image;