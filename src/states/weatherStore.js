import { atom, selector } from 'recoil'
import axios from 'axios';
import { WEATHER_API_URL, SEOUL } from '_constants/api'
import WEATHER_API_KEY from '../config';

export const weatherState = atom({
	key: 'weatherState',
	default: []
})

export const getWeatherSelector = selector({
	key: 'weather/get',
	get: async({ get }) => {
		try{
			console.log(WEATHER_API_KEY);
			const { data } = await axios.get(`${WEATHER_API_URL}/weather?q=${SEOUL}&appid=${WEATHER_API_KEY}`)
			return data
		} catch (err) {
			throw err;
		}
	},
	set: ({ set }, newValue) => {
		set(weatherState, newValue)
	}
})