import React from 'react';

import './metric.scss';

import viewIcon from '../../assets/icons/view.svg';

export default function Metric({ views = 0 }) {
	const force = (views) => {
		const result = ((views / 5) * 400) / 100 + 230;

		return result >= 400 ? 400 : result;
	};

	return (
		<div className="view-metric">
			<div className="view-metric__value">
				<img src={viewIcon} alt="view-icon" />
				<span>{views}</span>
			</div>
			<div style={{ transform: `rotate(${force(views)}deg)` }} className="view-metric__spin"></div>
		</div>
	);
}
