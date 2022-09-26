import { useEffect } from 'react';
import Head from 'next/head'
import BackgronudImage from '_components/BackgroundImage';
import Logo from '_components/Logo'
import Title from '_components/Title'
import Map from '_components/Map';


export default function Home() {
	
  return (
	<>
		<Head>
		<title>Camping Diary</title>
		<link rel="icon" href="/camda_logo_yellow_bg_green.png" />
		</Head>

		<main>
			<div className="h-screen p-10 bg-[#004958]">
				<BackgronudImage src="/home_background.jpg" />
				<Logo />
				<Title className="relative mt-20 leading-tight">
					나만의 캠핑을 위해,<br />
					모두가 즐거운 캠핑을 위해
				</Title>
				<Map />
			</div>
		</main>

	</>
  )
}
