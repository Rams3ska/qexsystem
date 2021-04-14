import React from 'react';

import './profileIdenty.scss';

export default function Profileidenty({ icon, name, specialization }) {
	return (
		<div className="profile-header__identy">
			<img src={icon} alt="user-icon" className="profile-icon" />
			<div className="profile-title">
				<span className="profile-title__name">{name}</span>
				<span className="profile-title__specialization">{specialization}</span>
			</div>
		</div>
	);
}
