import React from 'react';

const BackgronudImage = ({ src }) => {
	
	return (
		<div className="absolute top-0 left-0 w-full overflow-hidden h-[38rem]">
			<img
				src={src}
				className="absolute bottom-0 left-0 w-full min-h-full object-cover"
				style={{WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%,rgba(0,0,0,0) 100%)"}}
			/>
		</div>
	);
}

export default BackgronudImage;
