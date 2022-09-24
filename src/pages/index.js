import { useEffect } from 'react';
import Head from 'next/head'
import Card from '_components/Card'
import Title from '_components/Title'


export default function Home() {
	
  return (
	<>
		<Head>
		<title>Home</title>
		<link rel="icon" href="/favicon.ico" />
		</Head>

		<main>
		  	<Title blackWord="Welcome to " emphasisWord="Goorm!" emphasisLink="https://goorm.io" />

			<div className="mt-12 flex flex-wrap items-center justify-center">
				<Card link="/weather" title="날씨 예제 &rarr;" description="서울 날씨를 알려주는 예시 페이지" />
				<Card link="/search" title="검색 예제 &rarr;" description="태양계를 검색해보는 예시 페이지" />
			</div>
		</main>

	</>
  )
}
