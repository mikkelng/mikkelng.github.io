import './style.scss'
import { data } from './data'
import { useEffect, useState } from 'react'

type Data = typeof data
type NavItem = Data['nav'][number]
type SocialItem = Data['socials'][number]
type ExperienceItem = Data['experience'][number]
type EducationItem = Data['education'][number]
type InternshipItem = Data['internships'][number]
type SkillsGroup = Data['skills'][number]

function formatTitle(text: string) {
  const marker = '(unfinished)'
  if (text.includes(marker)) {
    const parts = text.split(marker)
    return (
      <>
        {parts[0].trim()} <em className='title-note'>(unfinished)</em>
        {parts[1] ?? ''}
      </>
    )
  }
  return text
}

function Sidebar() {
  const { name, role1, role2, nav, socials } = data
  const [active, setActive] = useState<string>((nav?.[0]?.href || '#about').replace('#',''))

  useEffect(() => {
    const ids = (nav || []).map((n: NavItem) => (n.href as string).replace('#',''))
    const sections = ids
      .map((id: string) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => {
      sections.forEach((s) => observer.unobserve(s))
      observer.disconnect()
    }
  }, [nav])

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) => {
    if (id === 'about') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActive(id)
      try { history.replaceState(null, '', href) } catch { void 0 }
      return
    }
  }
  return (
    <aside className='sidebar'>
      <div className='intro'>
        <h1 className='name'>
          <button
            type='button'
            className='name-button'
            aria-label='Scroll to top'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {name}
          </button>
        </h1>
        <h2 className='role'>{role1}</h2>
        <div className='role-divider' aria-hidden='true' />
        <h2 className='role'>{role2}</h2>
      </div>

      <div className='socials' aria-label='Social links'>
        {socials.map((s: SocialItem) => (
          <a
            key={s.href}
            href={s.href}
            className='social'
            target='_blank'
            rel='noreferrer noopener nofollow'
            aria-label={s.label}
          >
            <s.Icon />
          </a>
        ))}
      </div>

      <nav className='local-nav' aria-label='Section navigation'>
        {nav.map((item: NavItem) => {
          const id = (item.href as string).replace('#','')
          const isActive = active === id
          return (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${isActive ? ' active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => onNavClick(e, id, item.href)}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

function About() {
  const { about, skills } = data
  return (
    <section id='about' className='section section--stacked'>
      <a
        href='#about'
        className='section-header section-header--link'
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          try { history.replaceState(null, '', '#about') } catch { void 0 }
        }}
      >
        About Me
      </a>
      <div className='prose'>
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className='skills'>
        {skills.map((group: SkillsGroup) => (
          <div key={group.group} className='skills-group'>
            <span className='title'>{group.group}</span>
            <div className='tags'>
              {group.items.map((t: string) => (
                <span key={t} className='tag'>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const { experience } = data
  return (
    <section id='experience' className='section section--stacked'>
      <a href='#experience' className='section-header section-header--link'>Work Experience</a>
      <ul className='timeline'>
        {experience.map((item: ExperienceItem) => (
          <li key={item.company + item.title} className='timeline-item'>
            <div className='time'>{item.period}</div>
            <div className='job'>
              <div className='job-heading'>
                <span className='title'>{item.title}</span>
                
                <span className='company'>
                  {item.company}
                </span>
              </div>
              <p className='summary'>{item.summary}</p>
              <div className='tags'>
                {item.tags.map((t: string) => (
                  <span key={t} className='tag'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Education() {
  const { education } = data
  return (
    <section id='education' className='section section--stacked'>
      <a href='#education' className='section-header section-header--link'>Education</a>
      <ul className='timeline'>
        {education.map((item: EducationItem) => (
          <li key={item.company + item.title} className='timeline-item'>
            <div className='time'>{item.period}</div>
            <div className='job'>
              <div className='job-heading'>
                <span className='title'>{formatTitle(item.title)}</span>
                <span className='company'>
                  {item.company}
                </span>
              </div>
              <p className='summary'>{item.summary}</p>
              {item.tags && (
                <div className='tags'>
                  {item.tags.map((t: string) => (
                    <span key={t} className='tag'>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Internship() {
  const { internships } = data
  return (
    <section id='internship' className='section section--stacked'>
      <a href='#internship' className='section-header section-header--link'>Internship</a>
      <ul className='timeline'>
        {internships.map((item: InternshipItem) => (
          <li key={item.company + item.title} className='timeline-item'>
            <div className='time'>{item.period}</div>
            <div className='job'>
              <div className='job-heading'>
                <span className='title'>{item.title}</span>
                <span className='company'>
                  {item.company}
                </span>
              </div>
              <p className='summary'>{item.summary}</p>
              {item.tags && (
                <div className='tags'>
                  {item.tags.map((t: string) => (
                    <span key={t} className='tag'>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

// Skills content is rendered within About

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type='button'
      className={`scroll-top${visible ? ' show' : ''}`}
      aria-label='Scroll to top'
      onClick={onClick}
    >
      <svg width='18' height='18' viewBox='0 0 24 24' aria-hidden='true'>
        <path fill='currentColor' d='M12 5l6 6-1.4 1.4L13 8.8V19h-2V8.8L7.4 12.4 6 11z'/>
      </svg>
    </button>
  )
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
  )
}
