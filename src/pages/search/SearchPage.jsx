import React, { useState } from 'react';
import Title from '_components/Title'
import SearchInput from '_components/SearchInput'
import SearchResult from '_components/SearchResult'
import GoBackButton from '_components/GoBackButton'

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { solarState } from '_states/solarStore';


const SearchPage = () => {
	const a = useRecoilValue(solarState);
	
	return(
		<div className="flex flex-col items-center">
			<GoBackButton />
			<Title blackWord="Search " emphasisWord="Solar System" />
			<SearchInput />
			<SearchResult data={a} />
		</div>
	)	
}

export default SearchPage;
