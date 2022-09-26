import { useEffect } from 'react';

function useMap(id) {
	const initMap = () => {
		const target = document.getElementById(id);
		const option = {
			center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
			level: 3,
		}
		const map = new kakao.maps.Map(target, option)
	}

	useEffect(() => {
		if(window?.kakao)
			initMap();
	}, [])
	
	return { initMap }
}

export default useMap;
