import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { solarState } from '_states/solarStore';

import { SOLAR_API_URL } from '_constants/api'

const SearchResult = ({ data }) => {
	if(Object.keys(data).length>0) return (
		<ul className="mt-1">
			<li>Did you search <span className="italic">{data.englishName}</span>?</li>
			{Object.keys(data).map(key => {
				if(typeof data[key] === 'object') return null
				else return <li key={key}>{key}: {data[key]}</li>})
			}
		</ul>
	)
	return (
		<p className="mt-1">No datas</p>
	);
}

export default SearchResult;
