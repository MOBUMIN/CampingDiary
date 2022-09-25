import React from 'react';
import { RecoilRoot } from 'recoil';
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
		
	)
}
