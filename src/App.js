import './App.scss';

import Metric from './components/metric/metric';
import SkillBox from './components/skillBox/skillBox';
import ProfileIdenty from './components/profileIdenty/profileIdenty';

import userIcon from './assets/icons/user.svg';
import { useEffect, useState } from 'react';

function App() {
	const [user, setUser] = useState({
		id: 0,
		name: 'Maxim Kazakov',
		specialization: 'Front-End Developer',
		avatar: userIcon,
		profileViews: 0,
		skills: [
			{
				title: 'JavaScript',
				description:
					'Работаю с данным языком чуть больше года. Знаком со всеми последними стандартами ECMAScript. Использовал его в различных проектах: сайты, игры, сервера.',
			},
			{
				title: 'NodeJS',
				description: 'Знаком так же, как и с самим JS. Начал изучать параллельно с ним. Использовал там же, где и JavaScript.',
			},
			{
				title: 'JQuery',
				description:
					'Первая библиотека, которую приходилось использовать для упрощения разработки веб-страниц. Преимущественно использовал для создания динамики и из-за удобства селекторов.',
			},
			{
				title: 'React JS',
				description:
					'Основная библиотека, которую использую для создания веб приложений. Опыт использования ~1 год. Лучше всего знаком с хуковым подходом.',
			},
			{
				title: 'Redux JS',
				description: 'Стейтменеджер, который использую для React приложений. В целом хорошо знаю функционал данной библиотеки.',
			},
			{
				title: 'Express JS',
				description: 'Использовал для написания backend для сайта на RESTful архитектуре. '
			},
			{
				title: 'SCSS, Less',
				description:
					'С препроцессорами знаком относительно недавно. Чаще всего использую для вложенностей, импортов и прочих подобных вещей, которых не хватает в обычном CSS',
			},
			{
				title: 'C# .NET Core',
				description:
					'Первый язык, с которого начал свой путь программиста. Посредством данного языка знаю ООП, принципы SOLID, паттерны проектирования. Использовал для разработки игр, desktop приложений и бекенд части.',
			},
		],
	});

	useEffect(() => {
		setUser((prev) => ({ ...prev, profileViews: prev.profileViews + 1 }));

		const clearView = setTimeout(() => setUser((prev) => ({ ...prev, profileViews: prev.profileViews - 1 })), 15 * 60 * 1000);

		return () => {
			setUser((prev) => ({ ...prev, profileViews: prev.profileViews - 1 }));
			clearTimeout(clearView);
		};
	}, []);

	return (
		<div className="App">
			<div className="page-layout">
				<div className="page-body">
					<main className="user-info">
						<div className="island profile-header">
							<ProfileIdenty icon={user.avatar} name={user.name} specialization={user.specialization} />
							<Metric views={user.profileViews} />
						</div>

						<div className="island profile-skills">
							<div className="island__title">Навыки</div>
							{user.skills.map((x, i) => (
								<SkillBox key={i} title={x.title} description={x.description} />
							))}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
