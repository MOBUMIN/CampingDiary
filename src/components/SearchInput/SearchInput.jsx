import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { solarState } from '_states/solarStore';

import { SOLAR_API_URL } from '_constants/api'

const SearchInput = () => {
	const [keyword, setKeyword] = useState('');
	const setSolarState = useSetRecoilState(solarState)
	
	const handleChange = (e) => {
		setKeyword(e.target.value);
	}
	
	const handleSearch = async (e) => {
		e.preventDefault();

		axios
			.get(`${SOLAR_API_URL}/bodies/${keyword}`).then(res => {
				setSolarState(res.data);
			})
			.catch(e => {
				setSolarState({});
		})
		setKeyword('');
	}
	return(
		<form method="GET" onSubmit={handleSearch}>
			<div className="w-96 h-12 relative text-gray-400 focus-within:text-gray-600 mt-12">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
						<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</button>
				</span>
				<input
					name="search"
					className="w-full h-full py-2 border-2 text-ml rounded-md pl-10 focus:outline-none focus:border-sky-600"
					placeholder="Search..."
					autoComplete="off"
					value={keyword}
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}

export default SearchInput;
