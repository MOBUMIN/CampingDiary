import { useEffect, useState } from 'react';
import { NEXT_PUBLIC_KAKAO_KEY } from '../config';

function useMap(id) {
	const [searchObject, setSearchObject] = useState();

	const initMap = () => {
		const target = document.getElementById(id);
		const option = {
			center: new window.kakao.maps.LatLng(37.5173319258532, 127.047377408384),
			level: 13,
		}
		const map = new window.kakao.maps.Map(target, option)
		// 장소 검색 객체를 생성합니다
		setSearchObject(new kakao.maps.services.Places());
	}
	const loadMap = () => {
		window.kakao.maps.load(initMap)
	}
	const loadMapScript = () => {
		const mapScript = document.createElement("script");
		mapScript.async = true;
		mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services`;
		document.head.appendChild(mapScript);

		mapScript.addEventListener("load", loadMap)
	}


	useEffect(() => {
		loadMapScript();
	}, [])

	const searchKeyword = (keyword) => {
		searchObject.keywordSearch(keyword, (data, status, pagination) => {
			console.log(data, status, pagination);
		})
	}
	
	return { searchKeyword }
}

export default useMap;
