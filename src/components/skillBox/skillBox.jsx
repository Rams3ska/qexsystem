import React from 'react';

import './skillBox.scss';

export default function Skillbox({ title = 'none', description = 'none' }) {
	return (
		<div className="profile-skill">
			<span className="skill__title">{title}</span>
			<span className="skill__description">{description}</span>
		</div>
	);
}
