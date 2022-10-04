import Head from 'next/head'

import { BackgroundImage, Title, Map, ArrowText, SearchInput } from '_components';
import { LogoIcon } from '_icons';
import useMap from '_hooks/useMap';

export default function Home() {
	const mapId = "map"
	const { searchKeyword } = useMap(mapId)
	
  return (
	<>
		<Head>
		<title>Camping Diary</title>
		<link rel="icon" href="/camda_logo_yellow_bg_green.png" />
		</Head>

		<main>
			<div className="min-h-screen px-40 py-10 bg-[#004958]">
				<BackgroundImage src="/home_background.jpg" />
				<LogoIcon className="relative text-white w-60" />
				<Title className="relative mt-20 leading-tight">
					나만의 캠핑을 위해,<br />
					모두가 즐거운 캠핑을 위해
				</Title>
				<SearchInput searchKeyword={searchKeyword} />
				<ArrowText>원하는 캠핑장을 지도에서 찾아 보세요!</ArrowText>
				<Map mapId={mapId} />
			</div>
		</main>

	</>
  )
}
