import Link from 'next/link';

const WeatherPage = ({ blackWord, emphasisWord, emphasisLink }) => {
	return(
			<h1 className="m-0 text-6xl">
				{blackWord}<Link href={emphasisLink ?? ''}><span className={`text-sky-600 ${emphasisLink && 'cursor-pointer'} ${!emphasisLink && 'pointer-events-none'}`}>{emphasisWord}</span></Link>
			</h1>
	)	
}

export default WeatherPage;
