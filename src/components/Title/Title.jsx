const Title = ({ className, children }) => {
	return(
		<h1 className={`text-7xl ${className}`}>
			{children}
		</h1>
	)	
}

export default Title;
