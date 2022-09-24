import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Title from '_components/Title';
import { getWeatherSelector } from '_states/weatherStore';
import GoBackButton from '_components/GoBackButton';
import Loading from '_components/Loading';
import useCustomError from '_hooks/useCustomError';


const WeatherPage = () => {
	const weather = useRecoilValueLoadable(getWeatherSelector);
	const temp = weather.state === 'hasValue' && weather.contents.main.temp - 273.15;
	useCustomError();
    
	return weather.state === 'loading' ? <Loading /> : (
		<div className="flex flex-col items-center">
			<GoBackButton />
			<Title blackWord="Hi, " emphasisWord={`${weather.contents.name}!`} />
			<div className="flex gap-4 mt-12">
				<div className="flex flex-col items-center">
					<h1 className="text-2xl">TEMP</h1>
					<p className="text-xl mt-2">{temp.toFixed(0)}°C</p>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-2xl">HUMID</h1>
					<p className="text-xl mt-2">{weather.contents.main.humidity}%</p>
				</div>
			</div>
		</div>
	)
}

export default WeatherPage;
