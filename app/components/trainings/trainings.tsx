import Link from 'next/link'
import './trainings.css'
import type { Training, TrainingsProps } from './trainings.types'

const trainings: Training[] = [
	{
		title: 'AWS Certified Cloud Practitioner (CLF-C02): Cloud Foundations and Compute',
		provider: 'PluralSight',
		year: 'September 2025',
	},
	{
		title: 'Cypress 4: End-to-end JavaScript Testing',
		provider: 'PluralSight',
		year: 'July 2025',
	},
	{
		title: 'JavaScript Unit Testing with Jest',
		provider: 'PluralSight',
		year: 'May 2025',
	},
	{
		title: 'Testing in React 18',
		provider: 'PluralSight',
		year: 'April 2024',
	},
	{
		title: 'Create microservices with .NET and ASP.NET Core',
		provider: 'Microsoft Trainings',
		year: 'September 2023',
	},
	{
		title: 'Improve how forms and validation work in Blazor web apps',
		provider: 'Microsoft Trainings',
		year: 'September 2023',
	},
	{
		title: 'Create web apps and services with ASP.NET Core, minimal API, and .NET',
		provider: 'Microsoft Trainings',
		year: 'August 2023',
	},
	{
		title: 'Build web applications with Blazor Module',
		provider: 'Microsoft Trainings',
		year: 'December 2021',
	},
]

export default function Trainings({ trainings: providedTrainings }: TrainingsProps) {
	const trainingList = providedTrainings ?? trainings

	return (
		<section className="trainings" id="trainings" aria-labelledby="trainings-title">
			<div className="trainings__heading">
				<div>
					<p className="trainings__eyebrow">04 / Learning</p>
					<h2 id="trainings-title">Always<br />learning.</h2>
				</div>
				<p className="trainings__intro">Courses, certifications, and focused practice that continue to shape my work.</p>
			</div>

			{trainingList.length > 0 ? (
				<div className="trainings__list">
					{trainingList.map((training) => (
						<article className="trainings__item" key={`${training.title}-${training.year}`}>
							<div className="trainings__meta">
								<div>
									<p className="trainings__provider">{training.provider}</p>
									<h3>{training.title}</h3>
								</div>
								<span>{training.year}</span>
							</div>
							{training.description && <p className="trainings__description">{training.description}</p>}
							{training.url && <Link className="trainings__link" href={training.url} target="_blank" rel="noopener noreferrer">View training <span aria-hidden="true">↗</span></Link>}
						</article>
					))}
				</div>
			) : (
				<div className="trainings__empty">
					<h3>Your learning journey starts here.</h3>
					<p>Add courses, certifications, and training programs to the trainings list.</p>
				</div>
			)}
		</section>
	)
}
