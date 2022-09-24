/*
	https://openweathermap.org/ 에 회원가입 후 API KEY를 발급받아주세요!
	등록한 이메일로 verify mail을 확인한 후에 API KEY가 동작합니다. (수 시간 소요)
*/
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
export const SEOUL = 'Seoul'

/*
	https://api.le-systeme-solaire.net/swagger/#/
	위 사이트에서 제공하는 api입니다!
*/
export const SOLAR_API_URL = 'https://api.le-systeme-solaire.net/rest';
