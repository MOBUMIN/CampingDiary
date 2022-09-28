import React, { useState } from 'react';
import style from './SearchInput.module.scss';

const SearchInput = ({ searchKeyword }) => {
	const [input, setInput] = useState('');
	
	const handleChange = (e) => {
		setInput(e.target.value);
	}

	const handleSearch = (e) => {
		e.preventDefault();
		if(input.replace(/^\s+|\s+$/g, ''))
			searchKeyword(input);
	}

	return(
		<form method="GET" onSubmit={handleSearch}>
			<div className={style.SearchInput}>
				<span className={style.SearchInput__icon}>
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</span>
				<input
					name="search"
					className={style.SearchInput__input}
					placeholder="원하는 캠핑 장소를 찾아보세요"
					autoComplete="off"
					value={input}
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}

export default SearchInput;
