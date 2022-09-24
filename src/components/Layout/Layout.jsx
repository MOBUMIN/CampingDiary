import React from 'react';
import Footer from '_components/Footer'
import style from './Layout.module.scss';

const Layout = ({ children }) => {
	return(
		<div className={style.Layout}>
			<main>
				{children}
			</main>
			<Footer />
		</div>
	)
};

export default Layout;
