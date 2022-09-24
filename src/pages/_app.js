import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '_components/Layout'
import Loading from '_components/Loading';
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
		
	)
}
