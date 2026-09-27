import './work-experience.css'
import experiences from './work-experience-lists'
import type { WorkExperienceProps } from './work-experience.types'

export default function WorkExperience({ experiences: providedExperiences }: WorkExperienceProps) {
	const workExperiences = providedExperiences ?? experiences

	return (
		<section className="work-experience" id="experience" aria-labelledby="experience-title">
			<div className="work-experience__heading">
				<div>
					<p className="work-experience__eyebrow">02 / Experience</p>
					<h2 id="experience-title">Work<br />experience.</h2>
				</div>
				<p className="work-experience__intro">The places, people, and projects that have shaped how I work.</p>
			</div>

			{workExperiences.length > 0 ? (
				<div className="work-experience__list">
					{workExperiences.map((experience) => (
						<article className="work-experience__item" key={`${experience.company}-${experience.role}`}>
							<div className="work-experience__details">
								<div className="work-experience__meta">
									<h3>{experience.role}</h3>
									<span>{experience.period}</span>
								</div>
								<div className="work-experience__company-row">
									<p className="work-experience__company">{experience.company}</p>
									<span className="work-experience__separator" aria-hidden="true">·</span>
									<p className="work-experience__location">{experience.location}</p>
								</div>
								<ul className="work-experience__description">
									{experience.description.map((item) => <li key={item}>{item}</li>)}
								</ul>
							</div>
						</article>
					))}
				</div>
			) : (
				<div className="work-experience__empty">
					<span>Currently building the next chapter.</span>
					<p>Add your roles, companies, and contributions to the experience list.</p>
				</div>
			)}
		</section>
	)
}
