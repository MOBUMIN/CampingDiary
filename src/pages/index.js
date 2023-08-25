import Head from 'next/head'

import { BackgroundImage, Title, Map, ArrowText, SearchInput, Login } from '_components';
import { LogoIcon } from '_icons';
import useMap from '_hooks/useMap';
import DiaryModal from 'src/components/DiaryModal';

export default function Home() {
	const mapId = "map"
	const { searchKeyword } = useMap(mapId)
	
  return (
	<>
		<Head>
		<title>Camping Diary</title>
		<link rel="icon" href="/camda_logo_yellow_bg_green.png" />
		</Head>

		<main >
			<div className="min-h-screen p-8 md:px-40 md:py-10 bg-[#004958]">
				<BackgroundImage src="/home_background.jpg" />
				<div className="flex justify-between">
					<LogoIcon className="relative text-white w-60" />
				</div>
				<Title className="relative mt-20 leading-tight">
					캠핑 일기,<br />
					행복했던 캠핑 저장소
				</Title>
				<SearchInput searchKeyword={searchKeyword} />
				<ArrowText>원하는 캠핑장을 지도에서 찾아 보세요!</ArrowText>
				<Map mapId={mapId} />
			</div>
		</main>

	</>
  )
}
