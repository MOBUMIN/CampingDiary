import React from 'react';
import Script from 'next/script';
import { NEXT_PUBLIC_KAKAO_KEY } from '../../config';

import useMap from '_hooks/useMap';

const Map = () => {
	const mapId = "map"
	const { initMap } = useMap(mapId)

	return(
		<>
			<Script
				src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
				onLoad={() => kakao.maps.load(initMap)}
			/>
			<div id={mapId} style={{width: "500px", height: "400px"}}/>
		</>
	)
};

export default Map;
