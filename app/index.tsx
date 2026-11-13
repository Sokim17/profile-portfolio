import Link from 'next/link'
import type { HomepageProps } from './components/homepage/homepage.types'
import type { SkillsProps } from './components/skills/skills.types'
import Blog from './components/blog/blog'
import Skills from './components/skills/skills'
import WorkExperience from './components/work-experience/work-experience'
import Projects from './components/projects/projects'
import Trainings from './components/trainings/trainings'
import Homepage from './components/homepage/homepage'

type MainPageProps = HomepageProps & SkillsProps

export default function MainPage({ title, description, aboutDescription, skills }: MainPageProps) {
	return (
		<main className="homepage">
			<nav className="homepage__nav" aria-label="Main navigation">
				<Link className="homepage__mark" href="/" aria-label="Sokim Nam home">Home</Link>
				<div className="homepage__links">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#experience">Experience</a>
					<a href="#trainings">Trainings</a>
					<a href="#projects">Projects</a>
					<a href="mailto:hello@sokimnam.com">Contact</a>
					<a href="#blog">Blogs</a>
				</div>
			</nav>
			<Homepage title={title} description={description} aboutDescription={aboutDescription} />
			<WorkExperience />
			<Skills skills={skills} />
			<Trainings />
			<Projects />
			<Blog />
		</main>
	)
}
