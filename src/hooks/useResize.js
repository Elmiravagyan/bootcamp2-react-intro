import { useState, useEffect } from 'react';

const useResize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

	useEffect(() => {
		const handleResize = () => {
			console.log('Log ::: window.innerWidth ::: ', window.innerWidth);
			if(window.innerWidth > 500) {
				setIsMobile(false);
			} else {
				setIsMobile(true);
			}
		}
		window.addEventListener('resize', handleResize);

		return () => {
			console.log('Log ::: Unmounted ::: ');
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	return isMobile;
}

export default useResize;