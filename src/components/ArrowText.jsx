const ArrowText = ({ children }) => {
	
	return(
		<p className="text-white mt-20 flex flex-col justify-center items-center gap-0.5 mb-3">
			{children}
			<img src="/arrow_down.png" className="w-4" />
		</p>	
	)
}

export default ArrowText;
