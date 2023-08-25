import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import DiaryModal from 'src/components/DiaryModal';
import { NEXT_PUBLIC_KAKAO_KEY } from '../config';
import diaries from '../diaries';

function useMap(id) {
	let map = null;
	let markers = [];

	const initMap = () => {
		const target = document.getElementById(id);
		const option = {
			center: new window.kakao.maps.LatLng(37.5173319258532, 127.047377408384),
			level: 13,
			draggable: false,
		}
		map = new window.kakao.maps.Map(target, option)

		diaries.forEach(diary => {
			makeMarker(diary);
		})
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
		removeMarker();
		diaries.forEach(diary => {
			if(diary.place_name.includes(keyword)) {
				makeMarker(diary);
			}
		})
	}
	 
	const makeMarker = (data) => {
		const markerPosition = new kakao.maps.LatLng(data.y, data.x);
		const marker = new kakao.maps.Marker({
			map,
			title : data.place_name,
			position: markerPosition
		});

		displayInfowindow(marker, data.place_name, data.id);
		const infoEl = document.getElementById(data.id).parentElement.parentElement;
		infoEl.style.cursor = 'pointer';

		kakao.maps.event.addListener(marker, 'mouseover', function() {
			infoEl.style.zIndex = 10;
		});
		kakao.maps.event.addListener(marker, 'mouseout', function() {
			infoEl.style.zIndex = 1;
		});
		kakao.maps.event.addListener(marker, 'click', function() {
			openModal(data);
		});
		infoEl.addEventListener('click', () => {
			openModal(data);
		})
		
		markers.push(marker);
	}
	
	const removeMarker = () => {
		const infowWindows = document.querySelectorAll('.info-windows')
		infowWindows.forEach(dom => dom.parentElement.parentElement.remove())
		for(let i=0; i<markers.length; i++)
			markers[i].setMap(null);
		markers = [];
	}

	const displayInfowindow = (marker, title, id) => {
		const infoWindow = new window.kakao.maps.InfoWindow({ zIndex:1 });
	
		const content = `<div id=${id} style="padding:5px;z-index:1;" class="info-windows text-neutral-950">${title}</div>`;

		infoWindow.setContent(content);
		infoWindow.open(map, marker);
	}

	const closeModal = () => {
		ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
	}

	const openModal = (diary) => {
		const modalRoot = document.getElementById('modal-root');
		ReactDOM.render(<DiaryModal diary={diary} onClose={closeModal} />, modalRoot);
	}
	
	return { searchKeyword }
}

export default useMap;
