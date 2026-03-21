import './style.scss';
import { data } from './data';
import {
	LanguageIcon,
	MailIcon,
	BuildingIcon,
	MapPinIcon,
	SchoolIcon,
	JavaScriptIcon,
	HTMLIcon,
	CSSIcon,
	ReactIcon,
	NodeJsIcon,
	GitIcon,
	MongoDBIcon,
	PHPIcon,
	ExpressIcon,
	LaravelIcon,
	RestApiIcon,
	JSONIcon,
	NoSqlIcon,
	PLCIcon,
	CIcon,
	CSharpIcon,
	SchematicsIcon,
	WiringIcon,
	ConduitsIcon,
	InspectionIcon,
	TroubleshootingIcon,
	BasicMetalworkingIcon,
	PanelsIcon
} from './icons';
import { useEffect, useState } from 'react';

type Data = typeof data;
type NavItem = Data['nav'][number];
type SocialItem = Data['socials'][number];
type ExperienceItem = Data['experience'][number];
type EducationItem = Data['education'][number];
type InternshipItem = Data['internships'][number];
type SkillsGroup = Data['skills'][number];

function formatTitle(text: string) {
	const marker = '(unfinished)';
	if (text.includes(marker)) {
		const parts = text.split(marker);
		return (
			<>
				{parts[0].trim()} <em className='title-note'>(unfinished)</em>
				{parts[1] ?? ''}
			</>
		);
	}
	return text;
}

function Sidebar() {
	const { name, role1, role2, location, languages, email, nav, socials } = data;
	const [active, setActive] = useState<string>((nav?.[0]?.href || '#about').replace('#', ''));

	useEffect(() => {
		const ids = (nav || []).map((n: NavItem) => (n.href as string).replace('#', ''));
		const sections = ids.map((id: string) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 }
		);

		sections.forEach((s) => observer.observe(s));
		return () => {
			sections.forEach((s) => observer.unobserve(s));
			observer.disconnect();
		};
	}, [nav]);

	const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
		e.preventDefault();
		if (id === 'about') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		setActive(id);
		try {
			history.replaceState(null, '', href);
		} catch {
			void 0;
		}
	};
	return (
		<aside className='sidebar'>
			<div className='sidebar-top'>
				<div className='intro'>
					<h1 className='name'>
						<a
							href='#root'
							className='name-link'
							aria-label='Scroll to top'
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0 });
							}}>
							{name}
						</a>
					</h1>
					<h2 className='role'>{role1}</h2>
					<div
						className='role-divider'
						aria-hidden='true'
					/>
					<h2 className='role'>{role2}</h2>
				</div>

				<div className='contact'>
					<div
						className='socials'
						aria-label='Social links'>
						{socials.map((s: SocialItem) => (
							<a
								key={s.href}
								href={s.href}
								className='social'
								target='_blank'
								rel='noreferrer noopener nofollow'
								aria-label={s.label}>
								<s.Icon />
							</a>
						))}
					</div>
					<a
						className='contact-email'
						href={`mailto:${email}`}>
						<span
							className='meta-icon'
							aria-hidden='true'>
							<MailIcon />
						</span>
						<span className='meta-text'>{email}</span>
					</a>

					<div className='sidebar-meta'>
						<div className='meta-item'>
							<span
								className='meta-icon'
								aria-hidden='true'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12 3C8.685 3 6 5.685 6 9c0 4.5 6 12 6 12s6-7.5 6-12c0-3.315-2.685-6-6-6zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z'
										fill='currentColor'
									/>
								</svg>
							</span>
							<span className='meta-text'>{location}</span>
						</div>
						<div className='meta-item'>
							<span
								className='meta-icon'
								aria-hidden='true'>
								<LanguageIcon />
							</span>
							<span className='meta-text'>{languages.join(', ')}</span>
						</div>
					</div>
				</div>
			</div>

			<nav
				className='local-nav'
				aria-label='Section navigation'>
				{nav.map((item: NavItem) => {
					const id = (item.href as string).replace('#', '');
					const isActive = active === id;
					return (
						<a
							key={item.href}
							href={item.href}
							className={`nav-link${isActive ? ' active' : ''}`}
							aria-current={isActive ? 'page' : undefined}
							onClick={(e) => onNavClick(e, id, item.href)}>
							{item.label}
						</a>
					);
				})}
			</nav>
		</aside>
	);
}

const skillIconMap: Record<string, React.ComponentType> = {
	JavaScript: JavaScriptIcon,
	HTML: HTMLIcon,
	CSS: CSSIcon,
	'React.js': ReactIcon,
	'Node.js': NodeJsIcon,
	Git: GitIcon,
	GitHub: GitIcon,
	MongoDB: MongoDBIcon,
	PHP: PHPIcon,
	'Express.js': ExpressIcon,
	Laravel: LaravelIcon,
	'REST API': RestApiIcon,
	JSON: JSONIcon,
	NoSQL: NoSqlIcon,
	PLC: PLCIcon,
	C: CIcon,
	'C#': CSharpIcon,
	Schematics: SchematicsIcon,
	Wiring: WiringIcon,
	Conduits: ConduitsIcon,
	Inspection: InspectionIcon,
	Troubleshooting: TroubleshootingIcon,
	'Basic Metalworking': BasicMetalworkingIcon,
	Panels: PanelsIcon
};

function About() {
	const { about, skills } = data;
	return (
		<section
			id='about'
			className='section section--stacked'>
			<a
				href='#about'
				className='section-header section-header--link'
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0 });
					try {
						history.replaceState(null, '', '#about');
					} catch {
						void 0;
					}
				}}>
				About Me
			</a>
			<div className='prose'>
				{about.paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
			<div className='skills'>
				{skills.map((group: SkillsGroup) => (
					<div
						key={group.group}
						className='skills-group'>
						<span className='title'>{group.group}</span>
						<div className='tags'>
							{group.items.map((t: string) => {
								const IconComponent = skillIconMap[t];
								return (
									<span
										key={t}
										className='tag'>
										{IconComponent && (
											<span className='tag-icon'>
												<IconComponent />
											</span>
										)}
										<span>{t}</span>
									</span>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Experience() {
	const { experience } = data;
	return (
		<section
			id='experience'
			className='section section--stacked'>
			<a
				href='#experience'
				className='section-header section-header--link'>
				Work Experience
			</a>
			<ul className='timeline'>
				{experience.map((item: ExperienceItem) => (
					<li
						key={item.company + item.title}
						className='timeline-item'>
						<div className='time'>{item.period}</div>
						<div className='job'>
							<div className='job-title'>
								<span className='title'>{item.title}</span>
							</div>
							<div className='job-meta'>
								<span className='meta-item'>
									<span className='job-meta-icon'>
										<BuildingIcon />
									</span>
									<span className='company'>{item.company}</span>
								</span>
								{item.location && (
									<span className='meta-item'>
										<span className='job-meta-icon'>
											<MapPinIcon />
										</span>
										<span className='job-location'>{item.location}</span>
									</span>
								)}
							</div>
							<p className='summary'>{item.summary}</p>
							<div className='tags'>
								{item.tags.map((t: string) => {
									const IconComponent = skillIconMap[t];
									return (
										<span
											key={t}
											className='tag'>
											{IconComponent && (
												<span className='tag-icon'>
													<IconComponent />
												</span>
											)}
											{t}
										</span>
									);
								})}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}

function Education() {
	const { education } = data;
	return (
		<section
			id='education'
			className='section section--stacked'>
			<a
				href='#education'
				className='section-header section-header--link'>
				Education
			</a>
			<ul className='timeline'>
				{education.map((item: EducationItem) => (
					<li
						key={item.company + item.title}
						className='timeline-item'>
						<div className='time'>{item.period}</div>
						<div className='job'>
							<div className='job-title'>
								<span className='title'>{formatTitle(item.title)}</span>
							</div>
							<div className='job-meta'>
								<span className='meta-item'>
									<span className='job-meta-icon'>
										<SchoolIcon />
									</span>
									<span className='company'>{item.company}</span>
								</span>
							</div>
							<p className='summary'>{item.summary}</p>
							{item.tags && (
								<div className='tags'>
									{item.tags.map((t: string) => {
										const IconComponent = skillIconMap[t];
										return (
											<span
												key={t}
												className='tag'>
												{IconComponent && (
													<span className='tag-icon'>
														<IconComponent />
													</span>
												)}
												{t}
											</span>
										);
									})}
									<span className='tags-more'>+ more</span>
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}

function Internship() {
	const { internships } = data;
	return (
		<section
			id='internship'
			className='section section--stacked'>
			<a
				href='#internship'
				className='section-header section-header--link'>
				Internship
			</a>
			<ul className='timeline'>
				{internships.map((item: InternshipItem) => (
					<li
						key={item.company + item.title}
						className='timeline-item'>
						<div className='time'>{item.period}</div>
						<div className='job'>
							<div className='job-title'>
								<span className='title'>{item.title}</span>
							</div>
							<div className='job-meta'>
								<span className='meta-item'>
									<span className='job-meta-icon'>
										<BuildingIcon />
									</span>
									<span className='company'>{item.company}</span>
								</span>
								{item.location && (
									<span className='meta-item'>
										<span className='job-meta-icon'>
											<MapPinIcon />
										</span>
										<span className='job-location'>{item.location}</span>
									</span>
								)}
							</div>
							<p className='summary'>{item.summary}</p>
							{item.tags && (
								<div className='tags'>
									{item.tags.map((t: string) => {
										const IconComponent = skillIconMap[t];
										return (
											<span
												key={t}
												className='tag'>
												{IconComponent && (
													<span className='tag-icon'>
														<IconComponent />
													</span>
												)}
												{t}
											</span>
										);
									})}
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}

// Skills content is rendered within About

function ScrollTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onClick = () => window.scrollTo({ top: 0 });

	return (
		<button
			type='button'
			className={`scroll-top${visible ? ' show' : ''}`}
			aria-label='Scroll to top'
			onClick={onClick}>
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				aria-hidden='true'>
				<path
					fill='currentColor'
					d='M12 5l6 6-1.4 1.4L13 8.8V19h-2V8.8L7.4 12.4 6 11z'
				/>
			</svg>
		</button>
	);
}

export default function App() {
	return (
		<div className='container'>
			<div className='layout'>
				<Sidebar />
				<main className='content'>
					<About />
					<Experience />
					<Education />
					<Internship />
				</main>
			</div>
			<ScrollTopButton />
		</div>
	);
}
