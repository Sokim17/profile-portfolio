import Link from 'next/link'
import './projects.css'
import type { Project, ProjectsProps } from './projects.types'

const projects: Project[] = [
	{
		title: 'EnterpriseWebTemplate Project',
		description: 'Designed and developed an enterprise-level web application framework using proven design patterns to streamline development and maintainability. Leveraged C#, .NET, and Entity Framework for efficient data access, integrated JWT for secure authentication, and built REST APIs for seamless communication.',
		year: '2026',
		category: 'Enterprise web application framework',
		url: 'https://github.com/Sokim17/EnterpriseWebAPITemplate',
	},
]

export default function Projects({ projects: providedProjects }: ProjectsProps) {
	const projectList = providedProjects ?? projects

	return (
		<section className="projects" id="projects" aria-labelledby="projects-title">
			<div className="projects__heading">
				<div>
					<p className="projects__eyebrow">05 / Selected work</p>
					<h2 id="projects-title">Projects I&apos;ve<br />worked on.</h2>
				</div>
				<p className="projects__intro">A selection of ideas brought to life through design, code, and collaboration.</p>
			</div>

			{projectList.length > 0 ? (
				<div className="projects__list">
					{projectList.map((project, index) => (
						<article className="projects__item" key={`${project.title}-${project.year}`}>
							<span className="projects__number">{String(index + 1).padStart(2, '0')}</span>
							<div className="projects__details">
								<div className="projects__meta">
									<div>
										<p className="projects__category">{project.category}</p>
										<h3>{project.title}</h3>
									</div>
									<span>{project.year}</span>
								</div>
								<p className="projects__description">{project.description}</p>
								{project.url && <Link className="projects__link" href={project.url} target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></Link>}
							</div>
						</article>
					))}
				</div>
			) : (
				<div className="projects__empty">
					<span className="projects__number">01</span>
					<div>
						<h3>Your next project could be here.</h3>
						<p>Add your work to the projects list when you are ready.</p>
					</div>
				</div>
			)}
		</section>
	)
}
