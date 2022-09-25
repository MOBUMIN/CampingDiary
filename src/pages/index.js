import { useEffect } from 'react';
import Head from 'next/head'
import Logo from '_components/Logo'
import Title from '_components/Title'


export default function Home() {
	
  return (
	<>
		<Head>
		<title>Camping Diary</title>
		<link rel="icon" href="/camda_logo_yellow_bg_green.png" />
		</Head>

		<main>
			<div className="h-screen p-10 bg-[#004958]">
				<img
					src="/home_background.jpg"
					className="absolute -top-2/4 left-0 w-full"
					style={{WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%,rgba(0,0,0,0) 100%)"}}
				/>
				<Logo />
				<Title className="relative mt-20 leading-tight">
					나만의 캠핑을 위해,<br />
					모두가 즐거운 캠핑을 위해
				</Title>
			</div>
		</main>

	</>
  )
}
