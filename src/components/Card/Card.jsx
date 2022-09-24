import React from 'react';
import Link from 'next/link';

const Card = ({ link, title, description }) => 
	<Link href={link} >
		<a className="group relative border border-slate-400 rounded-lg m-4 p-6 group-hover:border-sky-600">
			<h3 className="mb-4 text-2xl group-hover:text-sky-600">{title}</h3>
			<p className="text-lg">{description}</p>
		</a>
	</Link>

export default Card;
